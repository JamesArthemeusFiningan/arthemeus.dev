@php
    $images = array_values(array_diff(scandir(public_path("assets/img/galleries/{$name}")), [".", ".."]));
@endphp


<div class="art-img-galler-outer overflow-hidden">
    <div class="art-ct art-ct-sm">
        <div class="art-img-gallery-container grid items-center">
            @foreach($images as $image)
                @php
                    if ($loop->first) {
                        $state = "active";
                    } else if ($loop->last) {
                        $state = "past";
                    } else if ($loop->index == 1) {
                        $state = "future-visible";
                    } else {
                        $state = "future-invisible";
                    }
                @endphp
                <div class="art-img-gallery-item w-full art-img-gallery-item-state-{{$state}}">
                    <img src="/assets/img/galleries/{{$name}}/{{$image}}" alt="{{$name}}" class="w-full" loading="lazy"/>
                </div>
            @endforeach
        </div>
        <div class="art-img-gallery-pagination-outer flex justify-between mt-12">
            <div class="art-img-gallery-pagination-counter">
                <span class="text-grape h-4 @if(count($images) > 9) w-6 @else w-4 @endif text-center inline-block">1</span>/<span class="h-4 w-4 text-center inline-block">{{count($images)}}</span>
            </div>
            <div class="art-img-gallery-pagination-buttons">
                <button type="switch" data-direction="last"><i class="icofont-simple-left"></i></button>
                <button type="switch" data-direction="next"><i class="icofont-simple-right"></i></button>
            </div>
        </div>
    </div>
</div>
