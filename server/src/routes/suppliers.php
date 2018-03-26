<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

// Get all suppliers
$app->get('/api/suppliers', function(Request $request, Response $response){
    $sql_query = "SELECT * FROM suppliers";

    try{
        // Get DB Object
        $db = new db();

        // Connect
        $db = $db->connect();

        // Execute
        $stmt = $db->query($sql_query);
        $suppliers = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($suppliers, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

    } catch(PDOException $e) {
        echo '{"error": {"text": '.$e->getMessage().'}}';
    }
});

// Get single supplier
$app->get('/api/supplier/{id}', function(Request $request, Response $response){

    $id = $request->getAttribute('id');

    $sql_query = "SELECT * FROM suppliers WHERE suppliers.id = $id";

    try{
        // Get DB Object
        $db = new db();

        // Connect
        $db = $db->connect();

        // Execute
        $stmt = $db->query($sql_query);
        $supplier = $stmt->fetch(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($supplier, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

    } catch(PDOException $e) {
        echo '{"error": {"text": '.$e->getMessage().'}}';
    }
});

// Add supplier
$app->post('/api/suppliers/add', function(Request $request, Response $response){

    $json = $request->getBody();
    $supplierData = json_decode($json);

    $sql_query = "INSERT INTO suppliers (name,phone,email,address) VALUES 
    (:name,:phone,:email,:address)";

    try{
        // Get DB Object
        $db = new db();

        // Connect
        $db = $db->connect();

        // Execute
        $stmt = $db->prepare($sql_query);

        $stmt->bindParam(':name', $supplierData->name);
        $stmt->bindParam(':phone', $supplierData->phone);
        $stmt->bindParam(':email', $supplierData->email);
        $stmt->bindParam(':address', $supplierData->address);

        $stmt->execute();

        echo 'supplier '.$supplierData->name.' added';

    } catch(PDOException $e) {
        echo '{"error": {"text": '.$e->getMessage().'}}';
    }
});

// Update supplier
$app->put('/api/suppliers/update/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');

    // Get request body
    $json = $request->getBody();
    $supplierData = json_decode($json);

    $sql_query = "UPDATE suppliers SET
        name = :name,
        phone = :phone,
        email = :email,
        address = :address
    WHERE suppliers.id = $id";

    try{
        // Get DB Object
        $db = new db();

        // Connect
        $db = $db->connect();

        // Execute
        $stmt = $db->prepare($sql_query);
        
        $stmt->bindParam(':name', $supplierData->name);
        $stmt->bindParam(':phone', $supplierData->phone);
        $stmt->bindParam(':email', $supplierData->email);
        $stmt->bindParam(':address', $supplierData->address);

        $stmt->execute();

        echo 'supplier updated';

    } catch(PDOException $e) {
        echo '{"error": {"text": '.$e->getMessage().'}}';
    }
});

// Delete supplier
$app->delete('/api/suppliers/delete/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');

    $sql_query = "DELETE FROM suppliers WHERE suppliers.id = $id";

    try{
        // Get DB Object
        $db = new db();

        // Connect
        $db = $db->connect();

        // Execute
        $stmt = $db->prepare($sql_query);
        $stmt->execute();

        echo 'supplier deleted';

    } catch(PDOException $e) {
        echo '{"error": {"text": '.$e->getMessage().'}}';
    }
});