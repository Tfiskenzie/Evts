<?php
session_start();
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $state = $_POST['country'];
    $password = $_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_DEFAULT); // Hash password
    $confirmation_code = rand(100000, 999999); // Generate 6-digit code

    // Insert user into the database
    $stmt = $conn->prepare("INSERT INTO users (email, password, confirmation_code) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $hashed_password, $confirmation_code);

    if ($stmt->execute()) {
        // Send confirmation email
        $subject = "Confirm Your Email";
        $message = "Hi $fullname,\n\nYour confirmation code is: $confirmation_code\n\nPlease use this code to verify your account.";
        $headers = "From: no-reply@example.com";

        if (mail($email, $subject, $message, $headers)) {
            $_SESSION['email'] = $email; // Store email for verification
            header("Location: verify.html"); // Redirect to verification page
        } else {
            echo "Error sending email.";
        }
    } else {
        echo "Error: Could not create user. Email might already exist.";
    }
}
?>
