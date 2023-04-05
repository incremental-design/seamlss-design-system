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
  | Content | [Header](Components#Header), [Body Text](Components#body%20text), [Label](Components#label), [Inline Indicator](Components#inline%20indicator), [Annotation](Components#annotation), [Time](Components#time), [Date](Components#date), [DateTime](Components#datetime), [Badge](Components#badge), [Bar](Components#bar), [Donut](Components#donut), [Sunburst](Components#sunburst), [Line](Components#line), [Icon](Components#icon), [Graphic](Components#graphic)           |
  | Control | [Button](Components#button), [Toggle Switch](Components#toggle%20switch), [Segmented Control](Components#segmented%20control), [Navigation Link](Components#navigation%link), [Navigation Breadcrumb](Components#navigation%20breadcrumb), [Slider](Components#slider), [Field](Components#field), [Token](Components#token), [Stepper](Components#stepper), [Dropdown](Components#dropdown), [Dial](Components#dial), [Gauge](Components#gauge), [List Header](Components#list%20header), [List Handle](Components#list%20handle), [Checklist Item](Components#checklist%20item), [Checklist Progress Indicator](Components#checklist%20progress%20indicator), [Timeline Leaf](Components#timeline%20leaf), [Timeline Branch](Components#timeline%20branch), [Tree List Leaf](Components#tree%20list%20leaf), [Tree List Branch](Components#tree%20list%20branch), [Collection Item](Components#collection%20item), [Table Header](Components#table%20header), [Table Cell](Components#table%20header), [Toast](Components#toast), [Tooltip](Components#tooltip), [Socket](Components#socket), [Playhead](Components#playhead), [Filmstrip](Components#filmstrip)          |
  | Container        | [Checklist](Components#checklist), [Timeline](Components#timeline), [Tree List](Components#tree%20list), [Collection](Components#collection), [Graph](Components#graph), [Table](Components#table), [Node](Components#node), [Node Graph](Components#node%20graph), [Popover](Components#popover), [Palette](Components#palette), [Video Player](Components#video%20player)          |

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
