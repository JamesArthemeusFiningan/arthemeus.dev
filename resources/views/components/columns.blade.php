<div {{$attributes->merge(["class" => "art-columns-container flex flex-wrap gap-12"])}}>
    @if(isset($mobile))
        <div class="w-full lg:w-auto lg:flex-1 block lg:hidden">
            {{ $mobile }}
        </div>
    @else
        <div class="w-full lg:w-auto lg:flex-1">
            {{ $col1 }}
        </div>
    @endif
    <div class="w-full lg:w-auto lg:flex-1">
        @if(isset($mobile))
            {{ $col1 }}
        @else
            {{ $col2 }}
        @endif
    </div>
    @if(isset($mobile))
        <div class="w-full lg:w-auto lg:flex-1 hidden lg:block">
            {{ $col2 }}
        </div>
    @endif
</div>
