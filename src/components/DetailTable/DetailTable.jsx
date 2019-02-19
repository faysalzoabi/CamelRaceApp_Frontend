import React from "react";

export default function DetailTable() {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Age</th>
          <th scope="col">Haggaa</th>
          <th scope="col">Laqya</th>
          <th scope="col">Edaa</th>
          <th scope="col">Thanya</th>
          <th scope="col">Hool</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">First</th>
          <td>0</td>
          <td>1</td>
          <td>3</td>
          <td>5</td>
          <td>4</td>
        </tr>
        <tr>
          <th scope="row">Second</th>
          <td>7</td>
          <td>3</td>
          <td>6</td>
          <td>8</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">Thrid</th>
          <td>2</td>
          <td>4</td>
          <td>0</td>
          <td>1</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  );
}


