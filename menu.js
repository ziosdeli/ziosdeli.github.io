/* ============================================================
   ZIO'S ITALIAN DELI - MENU DATA
   ============================================================
   THIS IS THE ONLY FILE YOU EDIT TO CHANGE THE MENU OR PRICES.
   Save this file, then re-upload it (and refresh the site).

   Prices shown are CASH-DISCOUNT prices (credit-card prices are
   higher and shown at the register). All subject to tax.

   How each item works:
     name   = the item name
     sub    = small grey note under the name        (optional)
     p      = one price per column, in order         e.g. p:["9.49","12.99","10.99"]
     price  = a single price (for simple lists)      e.g. price:"7.99"
     full   = one price that spans all the columns   e.g. full:"9.99 / lb"

   For a category:
     title / caption / icon
     cols   = the price column headers   e.g. cols:["Roll","Wedge"]  (omit for single-price)
     span2  = true -> full-width card ;  twoCol = true -> two columns ;  note = grey text under list

   The order of the categories below is the order they appear on the page.
   ============================================================ */

window.MENU_DATA = {
  signature: {
    alsoAvailable: "Also available: BLT $5.99 / $8.99 (roll / hero) · Hamburgers & Fries · Chopped Cheese · Philly Cheese Steaks · Grilled Cheese.",
    items: [
      { name:"Joey's Special", roll:"9.99",  hero:"13.99", desc:"Prosciutto, fresh mozzarella, red roasted peppers & balsamic dressing." },
      { name:"Italian Combo",  roll:"9.99",  hero:"13.99", desc:"Ham, Genoa salami, provolone & pepperoni or mortadella, oil & vinegar, lettuce, tomato, peppers & onions." },
      { name:"First Born",     roll:"9.99",  hero:"13.99", desc:"Deluxe roast beef, cheddar, lettuce, tomato, onions, pickles & mayo." },
      { name:"Fia's Special",  roll:"9.99",  hero:"13.99", desc:"Ovengold turkey, Muenster cheese, lettuce, pickles, oil & vinegar." },
      { name:"Scotty's Special", roll:"9.99", hero:"13.99", desc:"Fried eggplant, fresh mozzarella, red roasted peppers & balsamic." },
      { name:"Zio's Combo",    roll:"10.49", hero:"14.99", desc:"Prosciutto, capocolla, soppressata, pepperoni, mozzarella, peppers, oil & vinegar." }
    ]
  },
  categories: [
    {
      title:"Breakfast", icon:"breakfast", caption:"Served from open · 6 AM weekdays",
      cols:["Roll","Wedge"],
      items:[
        { name:"Egg Sandwich", sub:"two eggs, scrambled or fried", p:["3.60","4.95"] },
        { name:"w/ American Cheese", p:["4.00","5.95"] },
        { name:"w/ Ham, Bacon or Sausage", p:["5.25","6.75"] },
        { name:"w/ Meat & Cheese", p:["5.75","8.25"] },
        { name:"Omelette", sub:"w/ cheese 5.95 · w/ meat 6.75 · western or veggie 8.95", full:"4.95" },
        { name:"Breakfast Pita", sub:"egg, peppers, onions, yellow pepper jack cheese", full:"6.25" },
        { name:"Potato & Eggs or Home Fries", sub:"roll or small tin / large", full:"5.99 / 8.99" },
        { name:"Croissant · Danish · Muffin", sub:"w/ butter 3.95", full:"3.75" },
        { name:"Bagel w/ Cream Cheese", full:"3.75" }
      ]
    },
    {
      title:"Hot Food", icon:"hot", caption:"Made hot - on a roll, wedge, or by the pound",
      cols:["Roll","Wedge","lb"],
      items:[
        { name:"Chicken Cutlet", p:["9.49","12.99","10.99"] },
        { name:"Chicken Parmigiana", p:["9.49","12.99","10.99"] },
        { name:"Meatballs", p:["9.49","12.99","10.99"] },
        { name:"Fried Eggplant", p:["9.49","12.99","10.99"] },
        { name:"Eggplant Parmigiana", p:["9.49","12.99","10.99"] },
        { name:"Sausage & Peppers", p:["9.49","12.99","10.99"] }
      ]
    },
    {
      title:"Store-Made Cold Salads", icon:"coldsalads", caption:"Made fresh in-house",
      cols:["lb","Roll","Wedge"],
      items:[
        { name:"Chicken Salad", p:["10.99","8.99","11.99"] },
        { name:"Cranberry Chicken Salad", p:["11.99","8.99","11.99"] },
        { name:"Tuna Salad", p:["10.99","8.99","11.99"] },
        { name:"Egg Salad", p:["8.99","6.49","8.99"] },
        { name:"Tomato & Mozzarella", full:"9.99 / lb" },
        { name:"Cole Slaw, Macaroni or Potato Salad", full:"6.99 / lb" },
        { name:"Pasta Salad", sub:"seasonal", full:"8.99 / lb" },
        { name:"Roasted Peppers", full:"8.99 / lb" },
        { name:"Rice Pudding", full:"8.99 / lb" }
      ]
    },
    {
      title:"Fresh Salads", icon:"saladscoffee", caption:"Made to order · dressings on request",
      items:[
        { name:"Tossed Green Salad", sub:"lettuce, tomato, cucumber, carrots, onions & peppers", price:"7.99" },
        { name:"Chef Salad", sub:"turkey, ham & swiss", price:"11.99" },
        { name:"Add grilled chicken", price:"+4.00" }
      ]
    },
    {
      title:"Premium Meats & Cheeses", icon:"coldcuts", caption:"Sliced fresh · sandwich on a roll or hero",
      span2:true, twoCol:true, cols:["lb","Roll","Hero"],
      box:"<b>Cheeses</b> (lb / Roll / Hero): American 8.49 / 5.99 / 6.99 · Cheddar 9.99 / 6.99 / 8.99 · Jalapeño Pepper Jack 9.99 / 6.99 / 8.99 · Munster 8.99 / 6.99 / 8.99 · Mozzarella 10.99 / 7.99 / 9.99 · Provolone 8.99 / 6.99 / 8.99 · Swiss 8.99 / 6.99 / 8.99.",
      note:"Add-ons: Bacon, BLT, Fresh Mozz or Avocado +1.75 roll / +2.25 hero · Cheese, Peppers, Olives, Onions, Lettuce, Tomato or Pickles +0.50 roll / +1.00 wedge each.",
      items:[
        { name:"Prosciutto di Parma", p:["19.99","9.49","12.99"] },
        { name:"Prosciutto Domestic", p:["17.99","8.99","11.99"] },
        { name:"Calabrese Sopressata", p:["19.99","8.99","11.99"] },
        { name:"Sopressata", sub:"hot or sweet", p:["18.99","8.99","11.99"] },
        { name:"Capocollo", sub:"hot or sweet", p:["19.99","8.99","11.99"] },
        { name:"Genoa Salami", p:["14.99","8.99","11.99"] },
        { name:"Pepperoni", p:["9.99","8.99","11.99"] },
        { name:"Mortadella", p:["13.49","8.49","10.99"] },
        { name:"Ovengold Turkey", p:["16.99","8.99","11.99"] },
        { name:"Honey Maple Turkey", p:["15.99","8.99","11.99"] },
        { name:"EverRoast Chicken", p:["14.99","8.99","11.99"] },
        { name:"Roast Beef", p:["17.99","8.99","11.99"] },
        { name:"Pastrami", p:["14.99","8.99","11.99"] },
        { name:"Virginia Ham", p:["14.99","8.99","11.99"] },
        { name:"Deluxe Ham", p:["14.49","8.99","11.99"] },
        { name:"Bologna", p:["8.99","5.99","7.99"] }
      ]
    }
  ]
};

window.CATERING_DATA = {
  categories: [
    {
      title:"Pasta Trays", icon:"pasta", caption:"Feeds a crowd - half or full tray",
      cols:["Half","Full"],
      items:[
        { name:"Baked Ziti", p:["45","80"] },
        { name:"Penne Vodka", p:["50","90"] },
        { name:"Primavera", p:["50","90"] },
        { name:"Manicotti", p:["50","90"] },
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
        { name:"Eggplant Parmigiana", p:["50","100"] },
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
        { name:"Party Heroes - 3 or 6 ft wedges", sub:"ring shape +$1.00/ft", price:"$18.99/ft" },
        { name:"Zio's Party Platter", sub:"Genoa salami, soppressata, pepperoni, provolone, olives, roasted peppers, artichoke hearts & bocconcini", price:"$120 lg" },
        { name:"Cold Cut Platter", sub:"Small / Large", price:"$65-120" },
        { name:"Also available", sub:"Italian antipasto · mixed sandwiches & wraps · assorted cheese & fruit", price:"Call" }
      ]
    }
  ]
};
