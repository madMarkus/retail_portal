<?php
    $request = 'SELECT * FROM suppliers';

    $result = mysqli_query($link, $request);

    mysqli_close($link);

    echo '<h3> Suppliers:</h3>';

    while ($suppliers = mysqli_fetch_array($result)) {
        ?>
        <p><?php echo 'Name: '.$suppliers['name'].'<br>'; ?> </p>
        <p><?php echo 'Phone: '.$suppliers['phone'].'<br>'; ?> </p>
        <p><?php echo 'Email: '.$suppliers['email'].'<br>'; ?> </p>
        <p><?php echo 'Address: '.$suppliers['address'].'<br>'; ?> </p>
        <hr>
        <?php
    }
?>