// Import the MongoDB driver
import {MongoClient} from "mongodb";

// Connect to the MongoDB cluster
const uri = "mongodb+srv://bxmt:96vPw65Cu0DxNdo0@cluster0.v8cycot.mongodb.net/bookingHistory?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Define the booking() function
async function bookingzz() {
  try {
    // Connect to the MongoDB cluster
    await client.connect(); 
    await client.db("bookingHistory").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // Get the reference to the "historyRecords" collection
    const collection = client.db("bookingHistory").collection("historyRecords");

    // Get the values of the origin and destination inputs
    const origin = document.getElementById("from").value;
    const destination = document.getElementById("to").value;

    // Get the distance and duration values from the output element
    const output = document.querySelector('#output');
    const distance = parseFloat(result.routes[0].legs[0].distance.text.split(' ')[0]);
    const duration = parseFloat(result.routes[0].legs[0].duration.text.split(' ')[0]);

    // Calculate the cost of the booking
    const cost = calculateCost(distance);

    // Create a new booking object
    const booking = {
      origin: origin,
      destination: destination,
      distance: distance,
      duration: duration,
      cost: cost,
      timestamp: new Date()
    };

    // Insert the new booking object into the "historyRecords" collection
    const result = await collection.insertOne(booking);

    // Display a success message
    output.innerHTML = "<div class='alert-success'><i class='fas fa-check'></i> Đặt vé thành công!</div>";

  } catch (error) {
    // Display an error message if there was a problem connecting to the database
    output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Có lỗi xảy ra, vui lòng thử lại.</div>";
  } finally {
    // Close the connection to the database
    await client.close();
  }
}