<div class="art-pageheroine-outer h-screen flex items-end">
    <div class="art-pageheroine-content art-ct art-ct-sm pb-6">
        <h1 class="text-center text-5xl md:text-7xl lg:text-8.5xl font-black">{{ $title }}</h1>
        <div class="art-pageheroine-image art-oversize-container mt-8">
            <div class="pageheroine-image-container">
                {{$heroineImage}}
            </div>
        </div>
        <div class="art-pageheroine-chevron pt-2 flex justify-center">
            <button type="scroll" data-target=".art-pageheroine-outer" aria-details="scroll to main content"><i class="icofont-simple-down text-4xl text-gay"></i></button>
        </div>
    </div>
</div>
