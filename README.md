# Seamlss Design System
%%the overall vision is to have a design system that can be used to mock up content creation apps on macOS, iPadOS, iOS and web%%
## Roadmap
### v1
A single sketch library that contains the most common components in an app.
It should:
* have two color themes: dark and light
* contain the following components

  | Type    | Component |
  | ------- | --------- |
  | Content | [Header](./Components.md#Header), [Body Text](./Components.md#body%20text), [Label](./Components.md#label), [Inline Indicator](./Components.md#inline%20indicator), [Annotation](./Components.md#annotation), [Time](./Components.md#time), [Date](./Components.nd#date), [DateTime](./Components.md#datetime), [Badge](./Components.md#badge), [Bar](./Components.md#bar), [Donut](./Components.md#donut), [Sunburst](./Components.md#sunburst), [Line](./Components.md#line), [Icon](./Components.md#icon), [Graphic](./Components.md#graphic)           |
  | Control | [Button](./Components.md#button), [Toggle Switch](./Components.md#toggle%20switch), [Segmented Control](./Components.md#segmented%20control), [Navigation Link](./Components.md#navigation%link), [Navigation Breadcrumb](./Components.md#navigation%20breadcrumb), [Slider](./Components.md#slider), [Field](./Components.md#field), [Token](./Components.md#token), [Stepper](./Components.md#stepper), [Dropdown](./Components.md#dropdown), [Dial](./Components.md#dial), [Gauge](./Components.md#gauge), [List Header](./Components.md#list%20header), [List Handle](./Components.md#list%20handle), [Checklist Item](./Components.md#checklist%20item), [Checklist Progress Indicator](./Components.md#checklist%20progress%20indicator), [Timeline Marker](./Components.md#timeline%20marker),[Timeline Segment](./Components.md#timeline%20segment), [Timeline Track](./Components.md#timeline%20track), [Tree List Leaf](./Components.md#tree%20list%20leaf), [Tree List Branch](./Components.md#tree%20list%20branch), [Collection Item](./Components.md#collection%20item), [Table Header](./Components.md#table%20header), [Table Cell](./Components.md#table%20header), [Toast](./Components.md#toast), [Tooltip](./Components.md#tooltip), [Socket](./Components.md#socket), [Playhead](./Components.md#playhead), [Filmstrip](./Components.md#filmstrip)          |
  | Container        | [Checklist](./Components.md#checklist), [Timeline](./Components.md#timeline), [Tree List](./Components.md#tree%20list), [Collection](./Components.md#collection), [Graph](./Components.md#graph), [Table](./Components.md#table), [Node](./Components.md#node), [Node Graph](./Components.md#node%20graph), [Popover](./Components.md#popover), [Palette](./Components.md#palette), [Video Player](./Components.md#video%20player)          |

* have layouts for three form factors: phone, tablet and desktop
* have styles that adhere to MacOS and iOS design conventions
* have states for each

%%todo: review table/table cell and make composition for collection and node graph%%

### v2
A single sketch library that:
* is programmatically generated
* adds three new color themes: lighter, darker and neon
* adds two new platforms: Material (android) and fluent design (windows)
### v3 - v6
* A sketch plugin that
	* generates a sketch library
	* accepts design tokens as theme colors
	* automatically updates a library when new components are added
	* lets users push their own symbols to the library generator
	* lets users select symbols by form factor and state
	* lets users see how elements are combined and alternated among states of components
	* publish their library as a complete design system
	* have interactive redlines for inspecting individual components
# [Contribute](./CONTRIBUTE.md)
