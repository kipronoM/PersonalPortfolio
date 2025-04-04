<?php
// Set headers to prevent caching and specify JSON response
header('Content-Type: application/json');
header('Cache-Control: no-cache, no-store, must-revalidate');

// Database connection parameters for XAMPP
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password (blank)
$dbname = "portfolio_db";

// Get POST data
$admin_username = isset($_POST['username']) ? $_POST['username'] : '';
$admin_password = isset($_POST['password']) ? $_POST['password'] : '';

// Response array
$response = array(
    'success' => false,
    'message' => 'Invalid request'
);

if (!empty($admin_username) && !empty($admin_password)) {
    try {
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            throw new Exception("Connection failed: " . $conn->connect_error);
        }

        // Prepare statement to prevent SQL injection
        $stmt = $conn->prepare("SELECT * FROM admin_users WHERE username = ?");
        $stmt->bind_param("s", $admin_username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            // User found, verify password
            $user = $result->fetch_assoc();

            // Using password_verify if you've stored hashed passwords (recommended)
            // Assuming you've used password_hash() to store passwords
            if (password_verify($admin_password, $user['password'])) {
                $response['success'] = true;
                $response['message'] = 'Login successful';
            } else {
                $response['message'] = 'Invalid username or password';
            }
        } else {
            $response['message'] = 'Invalid username or password';
        }

        $stmt->close();
        $conn->close();
    } catch (Exception $e) {
        $response['message'] = 'Database error: ' . $e->getMessage();
    }
}

// Return JSON response
echo json_encode($response);
