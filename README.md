# Elections
Prompt: Design and build a page that displays a map of county-level 2016 presidential election results for California at the county level. Along with the code, tell us about what you chose to show, which interactions you would like to implement given time, and how you would adapt for desktop. We are as interested in your process as we are the code and design. Design from a mobile-first perspective. The map should be rendered in code, set up to pull from an external data file.

# Data
### 2016 US counties
format: shapefile
source: Census Bureau
notes: Pull from external data file. Filter to California. Convert to topojson to reduce file size and maintain topology between features.

### Voting Results California by County
format: csv
source: NPR
notes: Vote *count* by county for 4 candidates. Data isn't normalized. Table also needs to be restructured by county/candidate. Must be proportional symbol map by county if nothing isn't done to the table because of the raw count data (votes). 

# Map Description
### Goals
	Flexible across geographies
	Avoid visual bias based on the size of counties
	Normalize data and possibly add additional dataset to contextualize. 

### Tools
Built in D3 to enhance the flexibility of the visualization. 

### Description
I made a D3 map with two vector layers: California Counties and US states. The map is centered on California and is in an equal area projection. I restructured the voting data using Excel's pivot tables and normalized candidate results by taking votes as a percent of total votes. I converted the county shapefile to topojson to limit file size and maintain topological relations between polygons.Doing so, opens possible design solutions. For simplicity of the exercise, I was going to show one variable, percent of trump voters (trump_per), at a time as a choropleth. I tried to join the csv voting data with the counties vector layer using D3.  I was planning to create a dropdown or button to display other candidates. The data loads correctly on the backend and is visible when I console.log(the data), but I ran out of time applying the styles and implementing the dropdown. The code is there though. I added a pseudo-search bar that is not also implemented. 

### Next Steps
In addition to the dropbown and search, I would add hover/onclick events to add voting stats for each candidate, potentially demographics of voters too. To assist mobile users, this information could also be displayed below the visualization as a bar chart organized by county. The two visualization (map and bar chart) could be coordinated so that a highlighted feature on the map would also highlight the same feature in the barchart. I would restrict pan and zoom. The map would take up the majority of the frame and would show broad patterns. I would avoid zoom unless additional, more detailed elections results are provided. I left the US base information for context, not to support panning around the map. 

One of my biggest critiques of election maps is the visual bias of large counties. I love cartograms as a design solution for familiar geographies (like all US states), but cartograms would difficult for local, state contexts. As such, I would propose adding population density as a second variable displayed through the use of transparency. Value-by-alpha maps use transparency as a way to normalize data visually. In this example, big large counties with small populations would be more tranparent and less visually intrusive. 

I did not stream in data for this assignment. All of my data methods would need to be automated and streamlined, espeically if this technique would be applied to each state. 


### Additional Data
	Voting turnout data–I'm particularly interested in groups that have *dropped* in turnout like black women who have had historically high turnout rates. 
	First time voters
	Census demographics (race, ethnicity, gender, age, education, income, etc.)—It'd be great to explore the intersections of demographic variables.
	Rural, urban, suburban results


# Process

### Context
notes: Familiarized myself with California elections results with online research and talking with a friend. Visual imaginary paints California as predominantly blue. Blue coast, red inland. Counties are large and skew the visual. Consider proportional symbols, value-by-alpha, or cartogram to alleaviate visual bias.

### Tools
Build in D3 to enhance the flexibility of the visualization. 

### Visualization

The options 1, 2, and 6 explore the data as it was provided (raw count of votes by candidate per count). The remainding options require normalized/standardized data. 

	option 1:
	Proportional symbol with dropdown for candidate(raw count data necessitates proportional symbols)
	Hover/onclick would give specific values for each county
	Dropdown would allow easy transition between candidates

	option 2:
	Split proportional symbol
	Show comparison between Trump/Clinton votes, immediate snapshot
	Hover/onclick would give specific values for each county with each candiate
	Option to add in additional candidates

	option 3:
	choropleth with dropdown showing normalized data
	hover/onclick would give specific values for each county
	downdown would allow easy transition between candidates

	option 4:
	"purple" choropleth with diverging color scheme demonstrating percent Trump/percent Clinton
	hover/onclick would give specific values for each county
	percent per candidate included Johnson and Stein
	no dropbown

	option 5:
	value-by-alpha 
	similar to cartograms
	incorporates population density as second variable 
	transparency shows population density and deemphasizes large rural counties
	
	option 6: 
	cartogram

### Projection
notes: Customize equal-area projection for California geography or use equal-area projection for the US (Albers Equal Area Conic) and then recenter for each state.

### Generalization
notes: Balance detail. Might have to use 2+ vector layers for base map depending on zoom. Zoom should provide "more" information and detail in the map.

### Resources Used
Interaction and Multivariate Choropleth Maps with D3 (Cartographic Perspectives): https://cartographicperspectives.org/index.php/journal/article/view/cp78-sack-et-al/1358

Mapping Data with D3 (MIT): http://duspviz.mit.edu/d3-workshop/mapping-data-with-d3/

Making a Map of the US with D3, Topojson, and CSV (Jonathon Soma): https://www.youtube.com/watch?v=G-VggTK-Wlg

Thanks!
