<?php
session_start();
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $confirmation_code = rand(100000, 999999);

    // Insert user into the database
    $stmt = $conn->prepare("INSERT INTO users (email, password, confirmation_code) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $password, $confirmation_code);

    if ($stmt->execute()) {
        // Send confirmation email
        $subject = "Confirm Your Email";
        $message = "Your confirmation code is: $confirmation_code";
        $headers = "From: no-reply@example.com";

        if (mail($email, $subject, $message, $headers)) {
            $_SESSION['email'] = $email; // Store email in session for verification
            header("Location: verify.php"); // Redirect to verification page
        } else {
            echo "Error sending email.";
        }
    } else {
        echo "Error: Email already exists.";
    }
}
?>
