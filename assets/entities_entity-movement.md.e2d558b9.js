import{_ as a,c as s,a as n,e,r as o,o as r}from"./404.md.9cf151ce.js";const y='{"title":"Entity Movement","description":"","frontmatter":{"title":"Entity Movement","category":"Tutorials"},"headers":[{"level":2,"title":"Movement Speed","slug":"movement-speed"},{"level":2,"title":"Movement Type","slug":"movement-type"},{"level":2,"title":"Movement Modifiers","slug":"movement-modifiers"},{"level":2,"title":"Navigation","slug":"navigation"},{"level":2,"title":"Navigation Abilities","slug":"navigation-abilities"},{"level":2,"title":"AI Goals","slug":"ai-goals"},{"level":3,"title":"Pathfinding","slug":"pathfinding"}],"relativePath":"entities/entity-movement.md"}',i={},p=e('<p>In Minecraft, entities have the ability to move through the world, either by walking, swimming or flying. To get these behaviors, your entity will generally need quite a few behaviors, broken out into various types.</p><p>As you read this tutorial, keep in mind that your entity will need at least:</p><ul><li><a href="#movement-speed">A component that sets the entities movement speed.</a></li><li><a href="#movement-type">A component to set how the entity will move (walking, flying, etc)</a></li><li><a href="#navigation-abilities">A component to set the entities navigation abilities, so it can generate paths.</a></li><li><a href="#ai">A component that sets where/when the entity should move (AI Goals).</a></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The best way to create a moving entity is by picking a similar entity from the vanilla behavior pack, and copying the components into your entity.</p><p>For example entities like Phantom, or Ghast, or Parrot are all flying entities, but have very different in-game behavior! Use the closest-matching entity as a template.</p></div><h2 id="movement-speed" tabindex="-1">Movement Speed <a class="header-anchor" href="#movement-speed" aria-hidden="true">#</a></h2><p>The first thing your entity needs is a speed component. This sets how quickly your entity will move through the world.</p><table><thead><tr><th>Component</th><th>Note</th></tr></thead><tbody><tr><td><a href="/entities/vanilla-usage-components.html#movement">minecraft:movement</a></td><td>Set movement speed (required)</td></tr><tr><td><a href="/entities/vanilla-usage-components.html#underwater-movement">minecraft:underwater_movement</a></td><td>Set movement speed in the water.</td></tr><tr><td><a href="/entities/vanilla-usage-components.html#flying-speed">minecraft:flying_speed</a></td><td>Set the speed in the air.</td></tr></tbody></table><p>You should always include <code>minecraft:movement</code>. Add the other two as needed.</p><p>All vanilla &quot;swimming&quot; entities like Dolphin include <code>underwater_movement</code>. Only some flying entities have <code>flying_speed</code>. It is not known why this is the case.</p><h2 id="movement-type" tabindex="-1">Movement Type <a class="header-anchor" href="#movement-type" aria-hidden="true">#</a></h2><p>Your entity will also need a movement type. Movement types set hard-coded behavior for <em>how</em> your entity will move through the world.</p><p>You may only include one movement type in your entity. Select the component that most closely matches your needs. Generally <code>basic</code>, <code>amphibious</code> and <code>fly</code> are good ones to use.</p><table><thead><tr><th>Component</th><th>Note</th></tr></thead><tbody><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.amphibious" target="_blank" rel="noopener noreferrer">minecraft:movement.amphibious</a></td><td>This move control allows the mob to swim in the water and walk on land.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.basic" target="_blank" rel="noopener noreferrer">minecraft:movement.basic</a></td><td>This component accents the movement of an entity.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.fly" target="_blank" rel="noopener noreferrer">minecraft:movement.fly</a></td><td>This move control causes the mob to fly.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.generic" target="_blank" rel="noopener noreferrer">minecraft:movement.generic</a></td><td>This move control allows a mob to fly, swim, climb, etc.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.hover" target="_blank" rel="noopener noreferrer">minecraft:movement.hover</a></td><td>This move control causes the mob to hover.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.jump" target="_blank" rel="noopener noreferrer">minecraft:movement.jump</a></td><td>Move control causes the mob to jump as it moves with a specified delay between jumps.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.skip" target="_blank" rel="noopener noreferrer">minecraft:movement.skip</a></td><td>This move control causes the mob to hop as it moves.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.sway" target="_blank" rel="noopener noreferrer">minecraft:movement.sway</a></td><td>This move control causes the mob to sway side to side, giving the impression it is swimming.</td></tr></tbody></table><h2 id="movement-modifiers" tabindex="-1">Movement Modifiers <a class="header-anchor" href="#movement-modifiers" aria-hidden="true">#</a></h2><p>Movement modifiers provide additional information about how your entity will move through the world. These components are not required for normal entities, but you should be aware of them.</p><table><thead><tr><th>Component</th><th>Note</th></tr></thead><tbody><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Awater_movement" target="_blank" rel="noopener noreferrer">minecraft:water_movement</a></td><td>Sets the friction the entity experiences in water.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Arail_movement" target="_blank" rel="noopener noreferrer">minecraft:rail_movement</a></td><td>Sets that the entity can move on rails (only).</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Afriction_modifier" target="_blank" rel="noopener noreferrer">minecraft:friction_modifier</a></td><td>Sets the friction the entity experiences on land.</td></tr></tbody></table><h2 id="navigation" tabindex="-1">Navigation <a class="header-anchor" href="#navigation" aria-hidden="true">#</a></h2><p>The next thing your entity needs is a navigation component. Navigation components have quite a few fields, like whether the entity can open doors or avoid sunlight. How you set these fields is generally more important than the navigation component you pick!</p><p>The reason there are so many navigation components is that each one gives a slightly different hard-coded behavior. Pick the navigation component whose name/description best matches the kind of navigation your entity will be doing.</p><p>You can only have one navigation component at any given time.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This component is very important. You should check vanilla examples for inspiration on what fields and values to use.</p></div><table><thead><tr><th>Component</th><th>Note</th></tr></thead><tbody><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.climb" target="_blank" rel="noopener noreferrer">minecraft:navigation.climb</a></td><td>Allows this entity to generate paths that include vertical walls like the vanilla Spiders do.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.float" target="_blank" rel="noopener noreferrer">minecraft:navigation.float</a></td><td>Allows this entity to generate paths by flying around the air like the regular Ghast.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.generic" target="_blank" rel="noopener noreferrer">minecraft:navigation.generic</a></td><td>Allows this entity to generate paths by walking, swimming, flying and climbing around, and jumping up and down a block.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.fly" target="_blank" rel="noopener noreferrer">minecraft:navigation.fly</a></td><td>Allows this entity to generate paths in the air as the vanilla Parrots do.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.swim" target="_blank" rel="noopener noreferrer">minecraft:navigation.swim</a></td><td>Allows this entity to generate paths that include water.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.walk" target="_blank" rel="noopener noreferrer">minecraft:navigation.walk</a></td><td>Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.</td></tr></tbody></table><h2 id="navigation-abilities" tabindex="-1">Navigation Abilities <a class="header-anchor" href="#navigation-abilities" aria-hidden="true">#</a></h2><p>On top of the movement and the navigation component, there exist many additional components to augment the abilities of your entity as they move through the world.</p><table><thead><tr><th>Component</th><th>Note</th></tr></thead><tbody><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.break_door" target="_blank" rel="noopener noreferrer">minecraft:annotation.break_door</a></td><td>Allows entity to break doors. It must also be turned on in the navigation component.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.open_door" target="_blank" rel="noopener noreferrer">minecraft:annotation.open_door</a></td><td>Allows entity to open doors. It must also be turned on in the navigation component.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Abuoyant" target="_blank" rel="noopener noreferrer">minecraft:buoyant</a></td><td>Specifies which liquids the entity can float in.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_climb" target="_blank" rel="noopener noreferrer">minecraft:can_climb</a></td><td>Allows this entity to climb up ladders.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_fly" target="_blank" rel="noopener noreferrer">minecraft:can_fly</a></td><td>Marks the entity as being able to fly. The pathfinder won&#39;t be restricted to paths where a solid block is required underneath it.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_power_jump" target="_blank" rel="noopener noreferrer">minecraft:can_power_jump</a></td><td>Allows the entity to power jump like the horse does in vanilla.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Afloats_in_liquid" target="_blank" rel="noopener noreferrer">minecraft:floats_in_liquid</a></td><td>Sets that this entity can float in liquid blocks.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Ajump.dynamic" target="_blank" rel="noopener noreferrer">minecraft:jump.dynamic</a></td><td>Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Ajump.static" target="_blank" rel="noopener noreferrer">minecraft:jump.static</a></td><td>Gives the entity the ability to jump.</td></tr></tbody></table><p>There are also components like <code>minecraft:preferred_path</code>, which will modify navigation based on block-based path-cost.</p><h2 id="ai-goals" tabindex="-1">AI Goals <a class="header-anchor" href="#ai-goals" aria-hidden="true">#</a></h2><p>The navigation component tells the entity <em>how</em> to generate paths, but it doesn&#39;t say <em>when</em> or <em>where</em> to generate paths. This is what the AI components are for.</p><p>AI Goals are prefixed with <code>behavior</code> and follow a priority system to pick which behavior to run. The lower priorities will be picked first.</p><p>In general, you should usually add quite a few AI components, with different priorities. Layered together, these will create realistic movement and behavior for your entity. As always, vanilla entities provide a good template for which components to add, and with what properties/priorities.</p><p>There are too many AI components that generate paths to list in this document. A few will be provided as examples:</p><table><thead><tr><th>Component</th></tr></thead><tbody><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_stroll" target="_blank" rel="noopener noreferrer">minecraft:behavior.random_stroll</a></td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.follow_owner" target="_blank" rel="noopener noreferrer">minecraft:behavior.follow_owner</a></td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.move_to_water" target="_blank" rel="noopener noreferrer">minecraft:behavior.move_to_water</a></td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.stroll_towards_village" target="_blank" rel="noopener noreferrer">minecraft:behavior.stroll_towards_village</a></td></tr></tbody></table><p>For a full list, visit <a href="https://bedrock.dev/docs/stable/Entities#AI%20Goals" target="_blank" rel="noopener noreferrer">bedrock.dev</a>.</p><h3 id="pathfinding" tabindex="-1">Pathfinding <a class="header-anchor" href="#pathfinding" aria-hidden="true">#</a></h3><p>Making entities go to specific places is one of the most common requests for Marketplace content. The best way to do pathfinding uses a second entity, which the first entity will be attracted to. I am going to call this secondary entity the <strong>marker</strong>. If you are confused on how to create a marker, visit the <a href="/entities/dummy-entities.html">Dummy Entities</a> page.</p><h4 id="idea" tabindex="-1">Idea <a class="header-anchor" href="#idea" aria-hidden="true">#</a></h4><p>The way we are going to do pathfinding is actually fairly simple: Make our entity aggressive towards our marker, and then simply place our marker where we want our entity to path to. The hard part is knowing what components to add so we get really long-range pathing.</p><h4 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h4><p>These components can be edited as needed to create good pathing. Make sure to update the <code>nearest_attackable_target</code> to point to your marker entity. This takes a <code>family_type</code>, so you should set one of those on your marker.</p><p>Don&#39;t forget to add some basic movement and navigation components so your entity is able to move.</p>',40),l=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:behavior.nearest_attackable_target&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reselect_targets&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;target_search_height&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;within_radius&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;must_see&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;entity_types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_family&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;waypoint_1&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_dist&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;minecraft:attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;damage&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;minecraft:behavior.melee_attack&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;require_complete_path&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;track_target&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;minecraft:follow_range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h4 id="detecting-a-reached-waypoint" tabindex="-1">Detecting a reached waypoint <a class="header-anchor" href="#detecting-a-reached-waypoint" aria-hidden="true">#</a></h4><p>You can use <code>minecraft:target_nearby_sensor</code> to detect when you have reached the marker entity:</p>`,3),c=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:target_nearby_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;inside_range&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outside_range&quot;</span><span class="token operator">:</span> <span class="token number">4.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;must_see&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;on_inside_range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reached_waypoint&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;on_outside_range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;not_reached_waypoint&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1);function d(m,h,u,b,f,k){const t=o("CodeHeader");return r(),s("div",null,[p,n(t),l,n(t),c])}var g=a(i,[["render",d]]);export{y as __pageData,g as default};
