const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('compiled'));

app.listen(port, () => `Server is listening on port ${port}`);

app.post('/checkout', (req, res) => {
  console.log(req);
  res.end();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInBvcnQiLCJib2R5UGFyc2VyIiwidXNlIiwic3RhdGljIiwibGlzdGVuIiwicG9zdCIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlbmQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLE1BQU1DLE1BQU1GLFNBQVo7QUFDQSxNQUFNRyxPQUFPLElBQWI7QUFDQSxNQUFNQyxhQUFhSCxRQUFRLGFBQVIsQ0FBbkI7O0FBRUFDLElBQUlHLEdBQUosQ0FBUUwsUUFBUU0sTUFBUixDQUFlLFVBQWYsQ0FBUjs7QUFFQUosSUFBSUssTUFBSixDQUFXSixJQUFYLEVBQWlCLE1BQU8sK0JBQThCQSxJQUFLLEVBQTNEOztBQUVBRCxJQUFJTSxJQUFKLENBQVMsV0FBVCxFQUFzQixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNsQ0MsVUFBUUMsR0FBUixDQUFZSCxHQUFaO0FBQ0FDLE1BQUlHLEdBQUo7QUFDRCxDQUhEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBwb3J0ID0gMzAwMFxuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJylcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnY29tcGlsZWQnKSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gYFNlcnZlciBpcyBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG5cbmFwcC5wb3N0KCcvY2hlY2tvdXQnLCAocmVxLCByZXMpID0+IHtcbiAgY29uc29sZS5sb2cocmVxKTtcbiAgcmVzLmVuZCgpO1xufSkiXX0=