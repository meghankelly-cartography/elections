# elections
Prompt: Design and build a page that displays a map of county-level 2016 presidential election results for California   at the county level. Along with the code, tell us about what you chose to show, which interactions you would like to implement given time, and how you would adapt for desktop. We are as interested in your process as we are the code and design. Design from a mobile-first perspective. The map should be rendered in code, set up to pull from an external data file.

# data
### 2016 US counties
format: shapefile
source: Census Bureau
notes: Pull from external data file. Filter to California. Convert to topojson to reduce file size and maintain topology between features.

### Voting Results California by County
format: csv
source: NPR
notes: Vote *count* by county for 4 candidates. Data isn't normalized. Table also needs to be restructured by county/candidate. Must be proportional symbol map by county if nothing isn't done to the table because of the raw count data (votes). 

# tools
Built in D3 to enhance the flexibility of the visualization. 

# goals
Flexible across geographies
Avoid 

# steps for consideration
### Goals
	Flexible across geographies
	Avoid visual bias based on the size of counties
	Normalize data and possibly added additional dataset to contextualize. 

### Context
notes: Familiarized myself with California elections results with online research and talking with a friend. Visual imaginary paints California as predominantly blue. Blue coast, red inland. Counties are large and skew the visual. Consider proportional symbols, value-by-alpha, or cartogram to alleaviate visual bias.

### Tools
Build in D3 to enhance the flexibility of the visualization. 

### Visualization

The first two options explore the data as it was provide (raw count of votes by candidate per count).

	option 1:
	Proportional symbol with dropdown for candidate(raw count data necessitates proportional symbols)
	Hover/onclick would give specific values for each county
	Dropdown would allow easy transition between candidates

	option 2:
	Split proportional symbol
	Show comparison between Trump/Clinton votes, immediate snapshot
	Hover/onclick would give specific values for each county with each candiate
	Option to add in additional candidates

normalized data (votes per candidate as a percent of total votes)

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
	incorporates population density as second variable 
	transparency shows population density, deemphasizes large rural counties


### Projection
notes: Customize equal-area projection for California geography or use equal-area projection for the US (Albers Equal Area Conic) and then recenter for each state.

### Generalization
notes: Balance detail. Might have to use 2+ vector layers for base map depending on zoom. Zoom should provide "more" information and detail in the map.

# visualization

The first two options explore the data as it was provide (raw count of votes by candidate per count).

option 1: Proportional symbol with dropdown for candidate(raw count data necessitates proportional symbols)
	hover/onclick would give specific values for each county
	dropdown would allow easy transition between candidates

option 2: split proportional symbol
	show comparison between Trump/Clinton votes, immediate snapshot
	hover/onclick would give specific values for each county with each candiate
	option to add in additional candidates
	example: 

normalized data (votes per candidate as a percent of total votes)

	option 3: choropleth with dropdown showing normalized data
		hover/onclick would give specific values for each county
		downdown would allow easy transition between candidates

	option 4: "purple" choropleth with diverging color scheme demonstrating percent Trump/percent Clinton
		hover/onclick would give specific values for each county
			percent per candidate included Johnson and Stein
		no dropbown


	option 5: value-by-alpha 
		incorporates population density as second variable 
		transparency shows population density, deemphasizes large rural counties






Steps: 
Clean up
Join in D3
Visualize



CSV
-Format csv data
	pivot table to reorganize csv by county with candidates as attribute
–Normalize data
	count data normalized as a percentage of total votes



County Shapefile
–Filter counties to California
	
–Generalization
–Projection
	California vs. 




