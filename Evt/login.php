<?php
session_start();
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        if (password_verify($password, $user['password'])) {
            if ($user['is_verified'] == 1) {
                echo "Login successful!";
                $_SESSION['user_id'] = $user['id'];
                header("Location: dashboard.php");
            } else {
                echo "Please verify your email first.";
            }
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "No account found with this email.";
    }
}
?>
