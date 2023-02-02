<x-app-layout :page="$page">
    <div class="art-heroine-outer min-h-screen text-white flex items-center">
        <div class="art-heroine-container art-ct art-ct-lg">
            <div class="art-heroine-content max-w-3xl py-20">
                <h1 class="art-title text-5xl md:text-7xl lg:text-8.5xl font-black">Hi <span class="art-welcome-emoji rotate-12 inline-block animate-shake">👋</span> My name is <a class="text-gay" href="mailto:jason@kpunkt.ch">Jason</a>.</h1>
                <p class="text-3xl md:text-5xl !leading-tight mt-5">I'm your photo and video guy based in <span class="text-gay">Lausanne</span> & <span class="text-gay">Zurich</span></p>
                <div class="art-heroine-buttons flex mt-8 md:mt-12 text-fliess flex-wrap gap-4 md:gap-16">
                    <a href="/work" class="art-arrow-link">My work</a>
                    <a href="/life" class="art-arrow-link">My life</a>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
