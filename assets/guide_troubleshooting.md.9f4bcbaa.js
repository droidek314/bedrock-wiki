import{_ as s}from"./chunks/content_log.7e80e559.js";import{_ as r,c as i,a,w as n,e as l,b as o,d as e,r as c,o as d}from"./404.md.9cf151ce.js";const N='{"title":"Troubleshooting","description":"","frontmatter":{"title":"Troubleshooting","category":"Extra","prefix":"c. ","nav_order":3,"tags":["help"]},"headers":[{"level":2,"title":"Reload","slug":"reload"},{"level":2,"title":"The Environment","slug":"the-environment"},{"level":2,"title":"Content Log","slug":"content-log"},{"level":3,"title":"Content Log File","slug":"content-log-file"},{"level":2,"title":"Using Vanilla Resources","slug":"using-vanilla-resources"},{"level":2,"title":"JSON-Schemas","slug":"json-schemas"},{"level":1,"title":"Troubleshooting your addon!","slug":"troubleshooting-your-addon"},{"level":2,"title":"Entities","slug":"entities"},{"level":2,"title":"Items","slug":"items"},{"level":2,"title":"Blocks","slug":"blocks"}],"relativePath":"guide/troubleshooting.md"}',h={},u=l('<p>Creating Addons for Bedrock Minecraft is a relatively straightforward process <em>once you get the hang of it</em>. The first time is usually a frustrating, bug-prone process. This document contains some tips and tricks for fixing those dastardly bugs, as well as best practice information.</p><p>Please read the whole page, before jumping into troubleshooting tips for a specific domain.</p><h2 id="reload" tabindex="-1">Reload <a class="header-anchor" href="#reload" aria-hidden="true">#</a></h2><p>First, you should always reload Minecraft. That means fully closing the game and then reopening it. This can catch many errors, especially those related to assets that are accessed via a filepath, such as textures or loot tables.</p><h2 id="the-environment" tabindex="-1">The Environment <a class="header-anchor" href="#the-environment" aria-hidden="true">#</a></h2><p>The best way to prevent nasty bugs is by working in the right environment. You should review the <a href="/guide/software-preparation.html">software preparation document</a> for editor recommendations. The most important part is getting a JSON-linter, (<a href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer">or using an online json-linter</a>), and storing your packs in <code>development_behavior_packs</code> and <code>development_resource_packs</code>.</p><p>If you have your addons in the normal folders, you can run into &quot;pack caching&quot; issues, where you edit the files in one location, but the game is still using the old files.</p><h2 id="content-log" tabindex="-1">Content Log <a class="header-anchor" href="#content-log" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">Use the Content Log!</p><p>Content log is the best tool you have for debugging your addons. Please don&#39;t skip this step!</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Errors are not cleared between runs, so the errors you see in the content log may be <em>old</em> errors from prior runs.</p></div><p>The &#39;Content Log&#39; is a list of issues found in your pack. Minecraft will generate this list every time your load your world. It can catch issues such as:</p><ul><li>Wrong texture path</li><li>Wrong spelled component</li><li>Incorrect json structure</li></ul><p>Content log can be turned on in in <code>Settings &gt; Creator</code>. The content log will show in-game on load up, and if more errors occur during gameplay.</p><p><img src="'+s+'" alt=""></p><h3 id="content-log-file" tabindex="-1">Content Log File <a class="header-anchor" href="#content-log-file" aria-hidden="true">#</a></h3><p>The content log is saved in <code>.txt</code> format inside your files:</p><ul><li><em>Windows</em>: <code>C:\\Users\\USERNAME\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\logs</code></li><li><em>Android:</em> <code>/storage/emulated/0/Android/data/com.mojang.minecraftpe/files/games/com.mojang/logs</code></li></ul><h2 id="using-vanilla-resources" tabindex="-1">Using Vanilla Resources <a class="header-anchor" href="#using-vanilla-resources" aria-hidden="true">#</a></h2><p>You should download the vanilla resource and behavior pack. You can find the vanilla resource and behavior pack <a href="https://www.minecraft.net/en-us/addons/" target="_blank" rel="noopener noreferrer">here</a>. You can compare against the vanilla files if you have any issues!</p><h2 id="json-schemas" tabindex="-1">JSON-Schemas <a class="header-anchor" href="#json-schemas" aria-hidden="true">#</a></h2><p>JSON-Schemas are a valuable tool for file validation. You can learn more about JSON-Schemas <a href="/meta/using-schemas.html">here</a>.</p><h1 id="troubleshooting-your-addon" tabindex="-1">Troubleshooting your addon! <a class="header-anchor" href="#troubleshooting-your-addon" aria-hidden="true">#</a></h1><h2 id="entities" tabindex="-1">Entities <a class="header-anchor" href="#entities" aria-hidden="true">#</a></h2>',23),g=e(" Troubleshoot your entities."),p=o("h2",{id:"items",tabindex:"-1"},[e("Items "),o("a",{class:"header-anchor",href:"#items","aria-hidden":"true"},"#")],-1),m=e(" Troubleshoot your items."),f=o("h2",{id:"blocks",tabindex:"-1"},[e("Blocks "),o("a",{class:"header-anchor",href:"#blocks","aria-hidden":"true"},"#")],-1),b=e(" Troubleshoot your blocks.");function _(v,y,k,T,w,x){const t=c("BButton");return d(),i("div",null,[u,a(t,{link:"/entities/troubleshooting-entities"},{default:n(()=>[g]),_:1}),p,a(t,{link:"/items/troubleshooting-items"},{default:n(()=>[m]),_:1}),f,a(t,{link:"/blocks/troubleshooting-blocks"},{default:n(()=>[b]),_:1})])}var B=r(h,[["render",_]]);export{N as __pageData,B as default};
