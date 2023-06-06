# Answer1 CSS

- The box model is the basic concept of the css which help to render elements with dimensions. It also help to calculate elements dimensions.
  The padding , margin, border, width and Height.

# Answer2 CSS
There are many types of css selectors which are 
- 1 element selector selects element direct by  its name ex. h1, p , etc

- 2 class selector denoted by a dot (.) followed by the class name  ex .header

- 3 Id selector denoted by a pound (#) followed by the id name  ex #header

- 4 Attribute selectors, it selects element based on the attribute values ex `[type="submit"]` 

- 5 Pseudo-element selectors Pseudo-elements selects specific parts of an element. They are denoted by a double colon (::) followed by the pseudo-element name.

- 6 Pseudo-class selectors: Pseudo-classes selects elements based on specific states. denoted by a pound (:) ex :hover
all selectors are help to make dynamic styling and adding engaging ui on the we page.

# Answer3 CSS
VW and VH and the px are the measurements for the css element. 
VW - It denotes with of the viewport visible to the user it scales the entire with of the device
Vh - It denotes Hight of the viewport visible to the user it scales the entire with of the Height of the devise
px - It basically smallest unit of the measurement on a display. it represents actual pixel(.) on the screen.

The main difference between VW/VH and PX is that VW/VH units are relative to the viewport size, while pixels are absolute units.

# Answer4 CSS
The inline elements -
 are those elements with basically renders as in-line they do not start new line on web page.
we can give then left or right margin  but they not accepts the top and bottom margin. 
they allow to seat new element in left or right them
ex - ```<span>, <a>, and <strong>``` etc.

The inline-block elements -
are rendered as inline-level elements, but they also behave as block-level elements in terms of their layout.
it have all margins available and paddings also 
have block-level properties, which are width, height, padding, and margin

Block elements - 
block element start from new line take entire with from left and right.
the element do not allow another element on the same line.
have all properties, which are width, height, padding, and margin

# Answer5 CSS
box-sizing property with a value of content-box calculates the width and height of an element excluding the padding and border,
and border-box includes the padding and border within the specified width and height. The choice between the two depends on your preference and the specific layout requirements of your design.



# Answer6 CSS

z-index is the css property which help to staking the elements back and fourth along the z-axis. How its function -  positive z-index have more priority then then negative z-index its mean grater number z-index you have top top stack elements. How it helps - For staking elements on top or below of the elements its also work with positions relative, fixed or absolute but it not work with position static.


# Answer7 CSS


CSS Grid:
CSS Grid is a two-dimensional layout system that allows you to create grid-based layouts. It divides a web page into rows and columns, forming a grid structure. 

Grid Container: The parent element that holds the grid items. It is defined using the display: grid property.

Grid Items: The children of the grid container. They are positioned within the grid cells. Grid items are defined using the grid-column and grid-row properties, which specify their placement and span in the grid.

Grid Lines: The lines that form the grid. They can be referred to using line numbers or named lines.

Grid Tracks: The rows and columns that make up the grid. They can be sized explicitly using fixed values or automatically using flexible units.

Grid Template: The combination of rows and columns that define the grid structure. It can be defined using properties like grid-template-rows, grid-template-columns, and grid-template-areas.

CSS Flexbox:
Flexbox is a one-dimensional layout system that focuses on distributing and aligning elements along a single axis, either horizontally or vertically. 

Flex Container: The parent element that holds the flex items. It is defined using the display: flex property.

Flex Items: The children of the flex container. They are positioned along the main axis of the flex container. Flex items are defined using properties like flex-grow, flex-shrink, and flex-basis, which control their flexibility, size, and distribution.

Main Axis: The primary axis along which flex items are laid out. It can be either horizontal (row) or vertical (column).

Cross Axis: The secondary axis perpendicular to the main axis. It is used for alignment and control of flex items.

Flexbox is especially useful for creating dynamic and flexible layouts where elements need to adapt to different screen sizes or content lengths. It simplifies the vertical and horizontal alignment of elements and provides flexibility in distributing available space among flex items.

Difference between CSS Grid and Flexbox:

Layout Model: CSS Grid is a two-dimensional layout system, allowing for grid-based layouts with rows and columns. Flexbox, on the other hand, is a one-dimensional layout system focused on aligning and distributing elements along a single axis.

Layout Complexity: CSS Grid is more suitable for complex layouts with multiple rows and columns, while Flexbox is ideal for simpler layouts or aligning elements along a single axis.

Item Order: CSS Grid allows you to control the order of grid items using the grid-template-areas property or the order property on individual grid items. Flexbox also provides an order property to change the order of flex items along the main axis.

Alignment: Flexbox provides powerful alignment capabilities, allowing for vertical and horizontal alignment of flex items within a flex container. CSS Grid also offers alignment properties, but they are more focused on aligning the whole grid within its container.


# Answer12 CSS
Pseudo-elements:
Pseudo-elements, on the other hand, target specific parts of an element. They are denoted by a double colon (::) followed by the pseudo-element name. Here are some commonly used pseudo-elements:

::before: Targets the content before an element and allows you to insert additional content.
::after: Targets the content after an element and allows you to insert additional content.
::first-line: Targets the first line of text within an element.
::first-letter: Targets the first letter of text within an element.
Pseudo-elements are used to style or add content to specific parts of an element. They are often used for decorative purposes or to create custom styling effects.

pseudo-classes target elements based on states or relationships, while pseudo-elements target specific parts of an element and allow you to insert content. Both are valuable tools in CSS for applying styles in response to user interactions or for creating custom styling effects.



