import{_ as a,c as n,a as t,e,r as o,o as r}from"./404.md.9cf151ce.js";const f='{"title":"Using Schemas","description":"","frontmatter":{"title":"Using Schemas"},"headers":[{"level":2,"title":"Schemas","slug":"schemas"},{"level":2,"title":"VSCode","slug":"vscode"},{"level":3,"title":"Adding Schema to Workspaces","slug":"adding-schema-to-workspaces"}],"relativePath":"meta/using-schemas.md"}',i={},c=e('<p>A JSON schema gives you two things: validation to be sure that your JSON has the correct structure and (depending on editor support) IntelliSense to help you write your JSON correctly, to begin with. Schemas are nice because they give you instant feedback when you screw something up, but they can&#39;t catch everything.</p><p>JSON schemas are just JSON files themselves and don&#39;t do anything on their own. You can write your own or use somebody else&#39;s. There&#39;s a handful of schemas for Bedrock out there already. Since none of the schemas are &quot;official&quot; (that I know of), and since Bedrock is a moving target, there will probably be some inaccuracies in any schema that you find. So keep that in mind: sometimes the issue will be in your code, sometimes the schema may be wrong. If you find a wrong schema, consider improving it and giving the author a pull request to our collective benefit.</p><p>To get the validation working, you&#39;ll need a validator. You have many options here, including editor-specific options.</p><h2 id="schemas" tabindex="-1">Schemas <a class="header-anchor" href="#schemas" aria-hidden="true">#</a></h2><p>Many schemas exist, with many minor differences. Try out different schemas and see which one works best for you:</p><table><thead><tr><th>Author</th><th>Supports</th><th>Note</th></tr></thead><tbody><tr><td><a href="https://github.com/aexer0e/bedrock-schema" target="_blank" rel="noopener noreferrer">Assassin</a></td><td>Behavior pack entity file</td><td>The original Schema this article was written for</td></tr><tr><td><a href="https://github.com/bedrock-studio/bedrock-json-schemas/" target="_blank" rel="noopener noreferrer">Tschrock&#39;s</a></td><td>Manifest, Actor Animation Controller, Actor Animations, Actor Resource Definition, Render Controller, Geometry</td><td></td></tr><tr><td><a href="https://github.com/stirante/bedrock-shader-schema/" target="_blank" rel="noopener noreferrer">stirante</a></td><td>Shaders</td><td></td></tr></tbody></table><h2 id="vscode" tabindex="-1">VSCode <a class="header-anchor" href="#vscode" aria-hidden="true">#</a></h2><p>To use this schema inside your JSON file in VSCode, simply add this line to your root object:</p><p><code>&quot;$schema&quot;: &quot;https://aexer0e.github.io/bedrock-schema/&quot;</code></p><p>It should look like something like this:</p>',10),p=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.14.0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://aexer0e.github.io/bedrock-schema/&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="adding-schema-to-workspaces" tabindex="-1">Adding Schema to Workspaces <a class="header-anchor" href="#adding-schema-to-workspaces" aria-hidden="true">#</a></h3><p>If you want to utilize this schema to work with all of your files inside your Workspace, you can add it to your VS Code Workspace&#39;s settings.</p><p>To do this, make sure you&#39;re in your Workspace, then press <code>Ctrl+Shift+P</code> and type and select <code>&gt;Preferences: Open Workspace Settings (JSON)</code>. After that, add this to the root object</p>`,4),d=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;json.schemas&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;fileMatch&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;*.json&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://aexer0e.github.io/bedrock-schema/&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>To test if it works, create a <code>.json</code> file, open an object, and see if you get the auto-completion options. (You can also press <code>Ctrl+Space</code> to force it into showing the available options.)</p>`,2);function l(h,u,m,b,k,_){const s=o("CodeHeader");return r(),n("div",null,[c,t(s),p,t(s),d])}var y=a(i,[["render",l]]);export{f as __pageData,y as default};
