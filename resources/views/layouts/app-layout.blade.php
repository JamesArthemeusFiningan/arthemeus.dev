<!DOCTYPE html>
<html lang="{{app()->getLocale()}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$page["title"]}}@if($page["show-appname"]) | JDOxJAF @endif</title>

    @vite(["resources/css/app.scss"])
</head>
<body class="art-namespace-{{$page['namespace']}}">
    @if(!isset($page["hide-navbar"]) || !$page["hide-navbar"])
        <x-navbar :page="$page"/>
    @endif
    <main id="main-content" {{$attributes->merge(["class" => ""])}}>
        {{$slot}}
    </main>
</body>
@vite(["resources/js/app.js"])
</html>
