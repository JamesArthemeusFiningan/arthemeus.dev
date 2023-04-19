<x-app-layout :page="$page">
    <x-page-heroine>
        <x-slot:title>
            My <span class="text-apple">Work</span>.
        </x-slot>
        <x-slot:heroineImage>
            <video autoplay loop muted playsinline>
                <source src="/assets/vid/ph-work.mp4" type="video/mp4">
            </video>
        </x-slot>
    </x-page-heroine>
    <div class="art-page-lead art-ct art-ct-sm mt-8">
        <p class="text-4xl font-bold !leading-tight">I have been a photographer and videographer for a number of years and have had the privilege of co-founding the marketing and media collective, K., based in Zurich. </p>
    </div>


<script>
    window.addEventListener("load", () => {
        let a = document.createElement('a');
        a.classList.add('art-contactform-trigger');
        document.querySelector("main").appendChild(a);
        setTimeout(() => {
            a.click();
        }, 500);
    });
</script>
</x-app-layout>
