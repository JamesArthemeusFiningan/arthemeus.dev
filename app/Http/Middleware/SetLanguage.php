<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLanguage
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->cookie('lang')) {
            app()->setLocale($request->cookie('lang'));
        } else {
            $lang = $request->getPreferredLanguage(self::LOCALES);
            app()->setLocale($lang);
            cookie()->queue(cookie()->forever('lang', $lang));
        }
        return $next($request);
    }

    private const LOCALES = [
        // 'de',
        'en',
        // 'fr',
    ];
}
