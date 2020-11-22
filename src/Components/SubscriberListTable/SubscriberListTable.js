import * as React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaSort } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import Button from "@material-ui/core/Button";
import "./SubscriberListTable.css";

export default function DataTable() {
  return (
    <div className="table">
      <div>
        <h1>Subscriber List</h1>
      </div>


      <Button variant="outlined">
        <AiOutlinePlusCircle /> Add new list
      </Button>

      <table id="customers">
        <tr>
          <th>ID</th>
          <th>Customer List</th>
          <th>
            <FaSort className="sort" />
            Active
          </th>
          <th>
            <FaSort className="sort" />
            Unsubscribed
          </th>
          <th>Bounced</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>Discover </td>
          <td>81,024</td>
          <td>2 days ago</td>
          <td>3,764 opened</td>
          <td>171 clicked</td>
          <td>
            <MdEdit />
          </td>
          <td>
            <AiFillDelete />
          </td>
        </tr>
        <tr>
          <td>Discover </td>
          <td>81,024</td>
          <td>2 days ago</td>
          <td>3,764 opened</td>
          <td>171 clicked</td>
          <td>
            <MdEdit />
          </td>
          <td>
            <AiFillDelete />
          </td>
        </tr>
        <tr>
          <td>Discover </td>
          <td>81,024</td>
          <td>2 days ago</td>
          <td>3,764 opened</td>
          <td>171 clicked</td>
          <td>
            <MdEdit />
          </td>
          <td>
            <AiFillDelete />
          </td>
        </tr>
      </table>
    </div>
  );
}
