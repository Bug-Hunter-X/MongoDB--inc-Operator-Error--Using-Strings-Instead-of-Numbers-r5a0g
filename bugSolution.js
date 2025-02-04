```javascript
// Correct use of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({ _id: ObjectId('...') }, { $inc: { field: 1 } });
```