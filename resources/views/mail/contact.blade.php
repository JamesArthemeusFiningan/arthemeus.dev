<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Danke für Ihre Kontaktaufnahme, {{$name}}!</title>
    <style>
        body {
            font-family: sans-serif;
        }
    </style>
</head>
<body>

    <h1>Hiya 👋</h1>
    <p><b>Thanks for reaching out, {{$name}}!</b></p>
    <p>I received the following message from you:</p>
    <div style="padding: 1rem; background-color: #222222; width: fit-content; min-width: 450px; margin-bottom: 2rem">
        {{$contactMessage}}
    </div>
    <p>I'll try to get back to you as quickly as possible</p>
    <p>
        Cheers<br>
        <b style="text-align: end; display: block; width: fit-content;">
            Jason Dieter Oesch<br>
            James Arthemeus Finnigan
        </b>
    </p>
</body>

<style>
    html {
        background: black;
        color: white;
    }
</style>

</html>
