/* ============================================================
   ZIO'S ITALIAN DELI — MENU DATA
   ============================================================
   THIS IS THE ONLY FILE YOU EDIT TO CHANGE THE MENU OR PRICES.
   Save this file, then re-upload it (and refresh the site).

   How each item works:
     name   = the item name
     sub    = small grey note under the name        (optional)
     p      = one price per column, in order         e.g. p:["7.99","9.99","9.99"]
     price  = a single price (for simple lists)      e.g. price:"6.95"
     full   = one price that spans all the columns   e.g. full:"6.99 / lb"

   For a category:
     title   = the heading
     caption = the small italic line under the heading
     icon    = which icon to show (breakfast, hot, coldcuts, coldsalads,
               saladscoffee, pasta, chicken, platters, salad)
     cols    = the price column headers  e.g. cols:["Roll","Wedge","Dish"]
               (leave cols out for a simple single-price list)
     span2   = true  -> makes the card full width
     twoCol  = true  -> splits its items into two columns
     note    = extra grey text under the list        (optional)

   The order of the categories below is the order they appear on the page.
   ============================================================ */

window.MENU_DATA = {
  signature: {
    alsoAvailable: "Also available: Grilled Chicken Caesar Wrap $9.99 · Hamburgers & Fries · BLT · Chopped Cheese · Philly Cheese Steaks · Grilled Cheese.",
    items: [
      { name:"The Joey",      roll:"8.75", hero:"10.99", desc:"Prosciutto, fresh mozzarella, red roasted peppers & house dressing." },
      { name:"Italian Combo", roll:"8.75", hero:"10.99", desc:"Ham, Genoa salami, mortadella & provolone, lettuce, tomato, oil & vinegar." },
      { name:"Zio's Combo",   roll:"8.99", hero:"11.99", desc:"Prosciutto, capocolla, soppressata, pepperoni, mozzarella, peppers, oil & vinegar." },
      { name:"First Born",    roll:"8.75", hero:"10.99", desc:"Roast beef, cheddar, lettuce, tomato, onion, pickles & dressing." },
      { name:"The Fia",       roll:"8.75", hero:"10.99", desc:"Turkey, Muenster cheese, lettuce, tomato, pickles, oil & vinegar." },
      { name:"The Scotty",    roll:"8.75", hero:"10.99", desc:"Fried eggplant, fresh mozzarella, roasted peppers, oil & balsamic." }
    ]
  },
  categories: [
    {
      title:"Breakfast", icon:"breakfast", caption:"Served from open · 6 AM weekdays",
      cols:["Roll","Wedge"],
      items:[
        { name:"Egg Sandwich", sub:"two eggs", p:["2.85","4.35"] },
        { name:"w/ Cheese", p:["3.35","4.85"] },
        { name:"w/ Ham, Bacon or Sausage", p:["4.10","5.85"] },
        { name:"w/ Meat & Cheese", p:["4.60","6.85"] },
        { name:"Omelettes", sub:"plain / w-cheese", p:["4.35","4.85"] },
        { name:"Breakfast Pita", sub:"2 eggs, bacon & cheese", full:"4.99" },
        { name:"Bagel w/ Cream Cheese", full:"2.75" }
      ]
    },
    {
      title:"Hot Daily Specials", icon:"hot", caption:"Varies daily · Parm add $1.25",
      cols:["Roll","Wedge","Dish"],
      items:[
        { name:"Chicken Cutlet", sub:"breaded", p:["7.99","9.99","9.99"] },
        { name:"Grilled Chicken", p:["7.99","9.99","9.99"] },
        { name:"Chicken Parmigiana", p:["7.99","9.99","9.99"] },
        { name:"Eggplant Parmigiana", p:["7.99","9.99","9.99"] },
        { name:"Meatball", p:["7.99","9.99","9.99"] },
        { name:"Sausage & Peppers", p:["7.99","9.99","9.99"] },
        { name:"Pasta or Rice", sub:"Small / Large", p:["","5.99","7.99"] }
      ]
    },
    {
      title:"Homemade Cold Salads", icon:"coldsalads", caption:"Made in-house",
      cols:["lb","Roll","Wrap"],
      items:[
        { name:"Chicken Salad", p:["9.99","7.99","8.99"] },
        { name:"Cranberry Chicken Salad", p:["10.99","7.99","8.99"] },
        { name:"Tuna Salad", p:["9.99","7.99","8.99"] },
        { name:"Egg Salad", p:["6.99","6.49","7.99"] },
        { name:"Tomato & Mozzarella", full:"6.99 / lb" },
        { name:"Roasted Peppers", full:"8.99 / lb" }
      ]
    },
    {
      title:"Salads & Coffee Bar", icon:"saladscoffee", caption:"Fresh greens · fresh-brewed espresso",
      items:[
        { name:"House Salad", sub:"greens, veg, olives, mozzarella", price:"6.95" },
        { name:"Caesar Salad", sub:"romaine, parmesan, croutons", price:"6.95" },
        { name:"Chef Salad", sub:"turkey, ham & swiss", price:"9.95" },
        { name:"Coffee / Tea", sub:"sm / lg", price:"1.75+" },
        { name:"Cappuccino", price:"3.99" },
        { name:"Caffè Latte", price:"3.99" },
        { name:"Espresso", sub:"single", price:"3.00" },
        { name:"Daily Soup", sub:"per pint · seasonal", price:"4.99" }
      ]
    },
    {
      title:"Cold Cuts & Sandwiches", icon:"coldcuts", caption:"Boar's Head & Italian imports · sliced fresh",
      span2:true, twoCol:true, cols:["lb","Roll","Hero"],
      note:"Cheeses (lb / Roll / Hero): Mozzarella 9.99 · Provolone 8.99 · Swiss 8.99 · American 8.49 · Cheddar 9.99 · Pepper Jack 9.99 · Muenster 8.49.&nbsp; Extras: Bacon +1.75 · Fresh Mozz or Avocado +1.25 · Extra Meat +2.00.",
      items:[
        { name:"Prosciutto Imported", p:["19.99","8.99","10.99"] },
        { name:"Prosciutto Domestic", p:["17.99","8.50","10.50"] },
        { name:"Calabrese Soppressata", p:["19.99","8.99","10.99"] },
        { name:"Soppressata", p:["18.99","8.50","10.75"] },
        { name:"Capocollo", sub:"hot or sweet", p:["19.99","8.99","10.99"] },
        { name:"Genoa Salami", p:["14.49","8.25","10.25"] },
        { name:"Mortadella", p:["12.49","7.99","9.99"] },
        { name:"Pepperoni", p:["9.49","7.99","9.99"] },
        { name:"Roast Beef", p:["16.99","8.25","10.25"] },
        { name:"Turkey Oven Gold", p:["16.49","8.25","10.25"] },
        { name:"Honey Maple Turkey", p:["14.49","8.25","10.25"] },
        { name:"Pastrami", p:["14.99","8.25","10.99"] },
        { name:"Virginia Ham", p:["13.99","8.25","10.25"] },
        { name:"Deluxe Ham", p:["13.49","8.25","10.25"] },
        { name:"Sliced Chicken Breast", p:["13.99","8.25","10.25"] },
        { name:"Bologna", p:["8.99","5.99","7.99"] }
      ]
    }
  ]
};

window.CATERING_DATA = {
  categories: [
    {
      title:"Pasta Trays", icon:"pasta", caption:"Feeds a crowd — half or full tray",
      cols:["Half","Full"],
      items:[
        { name:"Baked Ziti", p:["45","80"] },
        { name:"Penne Vodka", p:["50","85"] },
        { name:"Primavera", p:["50","85"] },
        { name:"Manicotti", p:["50","85"] },
        { name:"Cheese Ravioli", p:["50","85"] },
        { name:"Rigatoni Bolognese", p:["50","90"] },
        { name:"Lasagna", sub:"ricotta, mozzarella & egg", full:"Full 100" }
      ]
    },
    {
      title:"Chicken & Entrées", icon:"chicken", caption:"Made-to-order hot trays",
      cols:["Half","Full"],
      items:[
        { name:"Chicken", sub:"Francese, Marsala, Parmigiana or Scarpariello", p:["60","110"] },
        { name:"Eggplant Parmigiana", p:["50","90"] },
        { name:"Eggplant Rollatini", p:["55","100"] },
        { name:"Meatballs", p:["60","100"] },
        { name:"Sausage & Peppers", p:["60","100"] },
        { name:"Roast Pork", p:["75","100"] },
        { name:"Steak Pizzaiola", p:["60","120"] },
        { name:"Turkey Rollatini", p:["50","110"] },
        { name:"Veal & Filet of Sole", full:"On request" }
      ]
    },
    {
      title:"Party Heroes & Platters", icon:"platters", caption:"The centerpiece of any gathering",
      span2:true, twoCol:true,
      items:[
        { name:"Party Heroes — 3 or 6 ft wedges", sub:"4 meats & 1 cheese · ring shape +$1.00/ft", price:"$18.99/ft" },
        { name:"Zio's Party Platter", sub:"Genoa salami, soppressata, pepperoni, provolone, olives, roasted peppers, artichoke hearts & bocconcini", price:"$120 lg" },
        { name:"Cold Cut Platter", sub:"Small / Large", price:"$65–120" },
        { name:"Also available", sub:"Italian antipasto · mixed sandwiches & wraps · assorted cheese & fruit", price:"Call" }
      ]
    }
  ]
};
