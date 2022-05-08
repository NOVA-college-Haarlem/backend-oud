# BACKEND - Les 2

## Inhoudsopgave

- [BACKEND - Les 1](#backend---les-2)
  - [Inhoudsopgave](#inhoudsopgave)
    - [Data checken](#data-checken)
    - [Mysql Cheatsheet](#mysql-cheatsheet)
    - [Data ophalen](#data-ophalen)
    - [Data opslaan](#data-opslaan)


### Data checken

Als je eenmaal data in een array hebt staan ($_POST) dan kun je deze data controleren met behulp van Conditionals

```php
if( 2 == "twee"){
  //hier gaat niets gebeuren
}
```

Je kunt bijvoorbeeld controleren of het emailadres niet leeg is:

```php
if( ! empty($_POST['email'])){
  //hier gaat iets gebeuren als het emailadres is ingevuld
}
```

Of je controleert of een variabele in de array uberhaubt bestaat:

```php
if( isset($_POST['submit'])){
  //hier gaat iets gebeuren als de submit variabele bestaat
}
```

### Mysql Cheatsheet

Als je de ingevulde gegevens hebt gecontroleerd dan kun je de gegevens gebruiken om er iets mee te doen. Bijvoorbeeld de gegevens vergelijken met die van de opgeslagen gegevens in de database.

Daarvoor heb je een database connectie nodig: Gebruik hiervoor de [MySQL CheatSheet](https://github.com/NOVA-college-Haarlem/Mysqli-cheatsheet)

Maak een verbinding. En haal de data op met behulp van SQL, bijvoorbeeld zo:

### Data ophalen

```php
require 'database.php';

$email = $_POST["email"];

$sql = "SELECT * FROM users WHERE email = '$email'";

if ( $result = mysqli_query($conn, $sql) )
{
  // haal een enkele db-rij op.
  while ($row=mysqli_fetch_assoc($result))
    {
        echo "Voornaam :" . $row["firstname"] ."<br> ";
        echo "Lastname :" . $row["lastname"];

    }
    // Haal het resultaat uit het geheugen
  mysqli_free_result($result);
}
mysqli_close($conn);
```

### Data opslaan

 Je kunt natuurlijk ook een formulier hebben gebouwd waarmee je data wilt opslaan. Ook hiervoor kun je de cheatsheet gebruiken

 ```php
require 'database.php';

$sql = "INSERT INTO users (forename, surname, nationality)
VALUES ('John', 'McTire','British')";

// Voer de INSERT INTO STATEMENT uit
mysqli_query($conn, $sql);

echo "Inserted successfully";
mysqli_close($conn); // Sluit de database verbinding


