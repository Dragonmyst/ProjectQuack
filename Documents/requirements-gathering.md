# Requirements Gathering
## Initial description of requirements
A scientist is trying to understand how ducks are being fed in parks around the world. She wants
to collect the following information:
- What time the ducks are fed
- What food the ducks are fed
- Where the ducks are fed
- How many ducks are fed
- What kind of food the ducks are fed
- How much food the ducks are fed
- Nice to have: the ability for a little old lady who feeds the ducks every day in the same way to set a repeating schedule so she doesn’t have to use the application every day

The scientist would like to crowdsource this information by creating a web application where
people can submit these data points. The scientist would like to be able to do reporting on the
data for her PhD thesis.

## Questions I would ask the client
1. Is all of the collection information required to be provided by the feeder?
1. For location of where the ducks were fed, how accurate should it be? Do you want the feeder to list country, province/state, city, name of park? Geolocation?
   1. For recording this data, should it be recorded in individual fields or as one long string to be parsed or searched during analysis?
1. Is there any parsing or massaging of the data needed or will you just want the raw data to work with?
1. For the nice to have repeat scheduling
   1. Are you wanting them to have a sign up and login to manage it? Or how would it be managed (ie. updated, canceled, etc.)?
   1. What happens if the feed forgets about it? Does this not create invalid data? Would it make sense to send a reminder or have an expirery? 

## Assumptions and decisions made
1. To reduce the barrier and make more feeders want to enter there data, I decided on the following fields as being optional.
   - province/state -Reason: I am not sure all countries have them.
   - city/town -Reason: The ducks may not be within a city or town.
   - park name -Reason: The ducks may not be within an actual park.
2. Decided on having individual fields for how the location is collected. I would think this would make it more accurate and easier to filter the data. It also allows for better type ahead fields or the use of drop downs.
3. Decided not to worry for this assignment about the need for parsing or massaging the data. The data is really simple and would likely not need calculations at this point.

## My nice to do if I have time
- ask for browser location and save that to help with location determination
  - could possibly use to prepopulate the fields  