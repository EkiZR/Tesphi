<?php
    $serverName = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "portal";

    // buat koneksi
    $koneksi = mysqli_connect($serverName,$userName,$password,$dbName);

    // cek koneksi
    if(!$koneksi) {
        die ("koneksi gagal".mysqli_connect_error());
    }
?>