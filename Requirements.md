Requirements: \
Must: \
-There needs to be 5 different actors, players, managers, drink masters, owners, sponsors\
-Owners decide who is the manager, Owner gets the money. Can manage User permissions (players, managers, drink meisters, sponsors).\
-Managers - assign sponsors and drink meisters, approve sponsors, they make the drink menu, do refunds, decide the start and end time of a tournament, they can end tournaments prematurely. = Bourgeoise. Can manage User permissions (players, drink meisters, sponsors).\
-Players: view the menu, order drinks/food, add money, add strokes to game. Resign Function - can leave early.\
-Drink Meister: Basically waiters, serve drinks, make drinks, make the food, they are the Proletariat. See current orders, the hole, cost, and player name.\
-Sponsor: Pick a date for a tournament and put up the prize money, given to winner\
-5 strokes, you move to the next hole.\
-Persisting data, so that old session storage is saved for a player. I.e. don’t have to enter their favorites every time.\
-Drink menu which players can order as they play.\
-Delivered screen - once an order is delivered\
-Drink Meister screen, see current orders and mark them as complete, in progress, and on hold.\
-Leaderboards : all time, unique tournaments, personal all time.\
-Winner of tournament: display of screen, distribution of money.\
-Contact info page\
-Calendar page that displays upcoming tournaments.\
-Sponsor: Q. for Dan: Do you want sponsors to have advertising space. Tournament name has sponsor in it.\ 
-Money management system, player pays into owners account (restaurant account). Sponsor account contains prize, moved to winning players on tournament end.\
-Individual players get notified when it’s their time to play.\
Should:\
-Refunds: Managers can decide to refund people. History of purchases. Table in the database. Refund function that takes a Player id and Order number id, delete Order from database, add funds to Player account.\
-Tournament has banner ads for sponsors\
-Drop down menu options for quick ordering, favorites bar,\
-* probably should Cart to review orders\
-Menu looks fire. If there’s any page I want looking nice, it’s the menu.\
-CRUD Tournament\
\
Could:\
-People could have a bare minimum of the amount of money they can put in, i.e. $20, so we can squeeze as much money out as possible.\
-Play history for players\
-Drinks and food always sum up to either $15 or $25. Sum = s = {N} | N != $20\
-Work Offline\
-Drink review system (user reviews)\
-Self ads that advertise our drinks and food\
-Users have multiple roles\
-Teams - team tourneys, individual tourneys\
Won’t:\
-Fail\
