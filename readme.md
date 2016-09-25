Inventrak is a Mobile Web application that an SME executive could use to monitor the inventory of his/her store throughout the day. Just open the dashboard and along with the list of all the items, it gives you an overview of all the items that require attention, without involving too many clicks/swipes or having to pore through the whole data. The Dashboard instantly lets the executive know which items are nearing the Expiry Date, have already expired and are about to be sold out. If an item is nearly sold out, it allows the executive to place an order for procurement by sending an email. The app provides settings for the executive to  be able to setup the email address for which procurement alerts are to be sent.

So, this is how Inventrak works:

Inside the Dashboard, new items could be added to the inventory and on addition, a bar code with the item details is generated, which could be printed and tagged on the item.
Inventrak has a billing section, which has a barcode reader which will pull the details of the item to be billed and deducts the entered quantity.
The Dashboard lists all the items available in the inventory, along with alerts, which let the executive know which items require immediate attention. When the quantity left goes below a threshold level, a 'Low Stock' alert is displayed. It also provides an option to place an order for procurement, which sends out an email. The Threshold level and the E-mail details could be configured in the app settings.
When the item is nearing expiry in about 5 days, a 'Nearing Expiry' alert is displayed.
Inventrak doesn't allow the executive to add an expired product to the inventory.

How have we put it together:

Inventrak is a Node.js application, developed using the Geddy MVC framework.
Internally, Bootstrap is used as the responsive framework for a better mobile experience.
Nodemailer is used to trigger the email notifications.
MongoDB to store the product data.
Heroku as the hosting platform.

(Built for Intuit Hackathon 2015)
