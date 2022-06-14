import{_ as n,c as a,a as o,e,r as s,o as r}from"./404.md.9cf151ce.js";const _='{"title":"Style Guide","description":"","frontmatter":{"title":"Style Guide"},"headers":[{"level":2,"title":"Folder Structure","slug":"folder-structure"},{"level":2,"title":"Identifiers","slug":"identifiers"},{"level":2,"title":"File and Folder names","slug":"file-and-folder-names"},{"level":2,"title":"Namespaces","slug":"namespaces"},{"level":2,"title":"Sub-indexing","slug":"sub-indexing"},{"level":2,"title":"Groups and Events should complement each other","slug":"groups-and-events-should-complement-each-other"},{"level":2,"title":"Short-Names should be Generic","slug":"short-names-should-be-generic"},{"level":2,"title":"Functions should be nested","slug":"functions-should-be-nested"},{"level":2,"title":"Group animations files when possible","slug":"group-animations-files-when-possible"},{"level":2,"title":"Split textures by path, not name","slug":"split-textures-by-path-not-name"},{"level":2,"title":".lang File Comments","slug":"lang-file-comments"},{"level":2,"title":"Acronyms when discussing","slug":"acronyms-when-discussing"}],"relativePath":"meta/style-guide.md"}',d={},i=e('<p>This document will present the officially supported Bedrock-Wiki style guide for addon-creation. This guide aims to promote best practices while creating addons and create a consistent format for everyone to follow.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The style guide is a living, breathing document, which will evolve as addon-creation evolves. Please get in touch if you think something needs to be updated or changed!</p></div><h2 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-hidden="true">#</a></h2><ul><li>No spaces in your file paths. <code>use_underscores</code>.</li><li>No <code>CAPITALS</code> in your identifiers, file names, or folder names.</li><li>The total character length of any path must not exceed 80 characters (console limitation).</li><li>Content folders should use consistent pluralization: Don&#39;t mix and match.</li></ul><h2 id="identifiers" tabindex="-1">Identifiers <a class="header-anchor" href="#identifiers" aria-hidden="true">#</a></h2><p>Do not use identifiers that begin with a number, and especially don&#39;t use an identifier that is <em>only</em> a number. This applies to entities, component_groups, events, and anything else that takes a <code>namespace:name</code> pair.</p><h2 id="file-and-folder-names" tabindex="-1">File and Folder names <a class="header-anchor" href="#file-and-folder-names" aria-hidden="true">#</a></h2><table><thead><tr><th>Concept</th><th>Example Identifier</th></tr></thead><tbody><tr><td>Behavior Pack</td><td>dragons_BP</td></tr><tr><td>Resource Pack</td><td>dragons_RP</td></tr><tr><td>Geometry</td><td>dragon.geo.json</td></tr><tr><td>Animation</td><td>dragon.animation.json</td></tr><tr><td>Animation Controller</td><td>dragon.ac.json</td></tr><tr><td>RP Entity</td><td>dragon.ce.json</td></tr><tr><td>BP Entity</td><td>dragon.se.json</td></tr><tr><td>Item 1.16.100+</td><td>dragon_tooth.item.json</td></tr><tr><td>BP Item</td><td>dragon_tooth.item.bp.json</td></tr><tr><td>RP Item</td><td>dragon_tooth.item.rp.json</td></tr><tr><td>Render Controller</td><td>dragon.rc.json</td></tr><tr><td>Loot Table</td><td>dragon.loot.json</td></tr><tr><td>Dragon Saddle</td><td>dragon_saddle.recipe.json</td></tr><tr><td>Spawn Rules</td><td>dragon.spawn.json</td></tr><tr><td>Trade Table</td><td>dragon.trade.json</td></tr><tr><td>Particles</td><td>dragon_magic.particle.json</td></tr><tr><td>Texture</td><td>dragon.png</td></tr><tr><td>Gametest</td><td>dragonTest.js</td></tr></tbody></table><h2 id="namespaces" tabindex="-1">Namespaces <a class="header-anchor" href="#namespaces" aria-hidden="true">#</a></h2><p>A suitable namespace should be unique to you or your team. Something like <code>mob</code> or <code>cars</code> or <code>content</code> or <code>custom</code> would be a <strong>bad</strong> namespace since another developer might come up with the same namespace as you.</p><p><code>minecraft</code> and <code>minecon</code> are reserved. Don&#39;t use these.</p><p>For personal projects, use a convenient version of your player name, and for team projects, use a suitable version of your team name.</p><p>When multiple developers work on a project together, the namespace should always be shared. If credit is required, use sub-indexing: <code>minetite.sirlich:dragon</code></p><p>Where to use name-spaces:</p><ul><li>entities</li><li>particles</li><li>component-groups</li><li>events</li></ul><p>When not to use namespaces:</p><ul><li>do not include your namespace in any folder path or file-name</li></ul><h2 id="sub-indexing" tabindex="-1">Sub-indexing <a class="header-anchor" href="#sub-indexing" aria-hidden="true">#</a></h2><p>Sub indexing is the use of <code>.</code> to separate chained concepts. Sub-indexing should go in descending order from big to small:</p><p>\u2714\uFE0F <code>animation.controller.dragon.flying.taking_off</code></p><p>\u274C <code>animation.controller.dragon_take_off_flying</code></p><p>When using sub-indexing, use <code>_</code> as space, not another <code>.</code>.</p><p>\u2714\uFE0F <code>animation.controller.dragon.flying.taking_off</code></p><p>\u274C <code>animation.controller.dragon.flying.taking.off</code></p><p>You can use sub-indexing in your entities: <code>sirlich:dragon.drake</code></p><h2 id="groups-and-events-should-complement-each-other" tabindex="-1">Groups and Events should complement each other <a class="header-anchor" href="#groups-and-events-should-complement-each-other" aria-hidden="true">#</a></h2><table><thead><tr><th>Group</th><th>Event</th></tr></thead><tbody><tr><td>sirlich:wild</td><td>\u2714\uFE0F sirlich:become_wild</td></tr><tr><td>sirlich:wild</td><td>\u274C sirlich:wild</td></tr><tr><td>sirlich:tame</td><td>\u2714\uFE0F sirlich:on_tame</td></tr><tr><td>sirlich:tame</td><td>\u274C sirlich:tame</td></tr></tbody></table><h2 id="short-names-should-be-generic" tabindex="-1">Short-Names should be Generic <a class="header-anchor" href="#short-names-should-be-generic" aria-hidden="true">#</a></h2><p>Short-names are file-specific identifiers, which are used to map between an identifier and a pretty name. They are handy because they allow us to re-use animation controllers and render controllers. For this reason, your short-names should be generic.</p><p>\u2714\uFE0F <code>&quot;sit&quot;: &quot;animation.dragon.sit&quot;</code></p><p>\u274C <code>&quot;dragon_sitting&quot;: &quot;animation.dragon.sit&quot;</code></p><p>When we make short-names of this form, we can use a generic &quot;sit&quot; animation controller for all of them since we can use the <code>sit</code> short-name to play the sit animation.</p><h2 id="functions-should-be-nested" tabindex="-1">Functions should be nested <a class="header-anchor" href="#functions-should-be-nested" aria-hidden="true">#</a></h2><p>You can put functions in folders to achieve this.</p><p>\u2714\uFE0F <code>function teleport/zone/hell</code></p><p>\u274C <code>function teleport_hellzone</code></p><h2 id="group-animations-files-when-possible" tabindex="-1">Group animations files when possible <a class="header-anchor" href="#group-animations-files-when-possible" aria-hidden="true">#</a></h2><p>Example:</p>',38),l=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;animation.dragon.sit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;animation.dragon.fly&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;animation.dragon.roar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="split-textures-by-path-not-name" tabindex="-1">Split textures by path, not name <a class="header-anchor" href="#split-textures-by-path-not-name" aria-hidden="true">#</a></h2><p>\u2714\uFE0F <code>textures/dragon/red</code></p><p>\u274C <code>textures/dragon_red_skin</code></p><p>\u2714\uFE0F <code>textures/npc/dragon_hunter/archer</code></p><p>\u274C <code>textures npc/dragon_hunter_archer</code></p><h2 id="lang-file-comments" tabindex="-1">.lang File Comments <a class="header-anchor" href="#lang-file-comments" aria-hidden="true">#</a></h2><p>Comments intended for the localizer should always be in-line, in the following format:</p><p><code>the.key=The string&lt;\\t&gt;## Comment, intended for the one localizing.</code></p><p><code>&lt;\\t&gt;</code> represents a tab-character.</p><p>Own-line comments can be used for organizational purposes but should not store localization-critical information.</p><h2 id="acronyms-when-discussing" tabindex="-1">Acronyms when discussing <a class="header-anchor" href="#acronyms-when-discussing" aria-hidden="true">#</a></h2><table><thead><tr><th>Acronym</th><th>Concept</th></tr></thead><tbody><tr><td>BP</td><td>Behavior Pack</td></tr><tr><td>RP</td><td>Resource pack</td></tr><tr><td>VRP</td><td>Vanilla Resource Pack</td></tr><tr><td>VBP</td><td>Vanilla Behavior Pack</td></tr><tr><td>AC</td><td>Animation Controller</td></tr><tr><td>RPAC</td><td>Resource Pack Animation Controller</td></tr><tr><td>BPAC</td><td>Behavior Pack Animation Controller</td></tr><tr><td>BB</td><td>Blockbench</td></tr><tr><td>BDS</td><td>Bedrock Dedicated Server</td></tr><tr><td>FPV</td><td>First Person View</td></tr><tr><td>RD</td><td>Render Dragon</td></tr><tr><td>VSCode</td><td>Visual Studio Code</td></tr></tbody></table>`,13);function c(p,u,h,m,g,f){const t=s("CodeHeader");return r(),a("div",null,[i,o(t),l])}var y=n(d,[["render",c]]);export{_ as __pageData,y as default};
