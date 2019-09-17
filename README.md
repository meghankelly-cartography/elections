# elections

#DATA

US 2016 counties
	format: shapefile
	source: Census Bureau
	details: needs to be filtered down to California

csv
	format: csv
	source: provided from NPR
	details: vote count by county for 4 candidates 



#VISUALIZATION Possibilities

current data

	option 1: proportional symbol with dropdown: raw count data necessitates proportional symbols
		hover/onclick would give specific values for each county
		dropdown would allow easy transition between candidates

	option 2: split proportional symbol
		show comparison between Trump/Clinton votes
		option to add in additional candidates

		example: 

 Test test
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




