<div class="max-w-md lg:max-w-none mx-auto">
    <div {{$attributes->merge(["class" => "art-image-aspect-ratio-container relative"])}}>
        <img src="{{$src}}" alt="{{$alt}}" class="absolute h-full w-full object-cover" loading="lazy">
    </div>
</div>
