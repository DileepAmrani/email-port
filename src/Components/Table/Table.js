import * as React from "react";
import {
  AiFillDelete,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaSort } from "react-icons/fa";
import "./Table.css";

export default function DataTable() {
  return (
    <div className="table">
      <div>
        <h1>Campagin reports</h1>
      </div>

      <table id="customers">
        <tr>
          <th>Compaign</th>
          <th className="mobile_view">
            <FaSort className="sort" />
            Recipients
          </th>
          <th>
            <FaSort className="sort" />
            Sent
          </th>
          <th className="mobile_view"> Unique Opens</th>
          <th className="mobile_view">
            <FaSort className="sort" />
            Unique Clicks
          </th>
          <th className="mobile_view">Delete</th>
        </tr>
        <tr>
          <td>Discover the latest fashion & trends at shop</td>
          <td className="mobile_view">81,024</td>
          <td>2 days ago</td>
          <td className="mobile_view">3,764 opened</td>
          <td className="mobile_view">171 clicked</td>
          <td className="mobile_view">
            <AiFillDelete />
          </td>
        </tr>
        <tr>
          <td>Discover the latest fashion & trends at shop</td>
          <td className="mobile_view">81,024</td>
          <td>2 days ago</td>
          <td className="mobile_view">3,764 opened</td>
          <td className="mobile_view">171 clicked</td>
          <td className="mobile_view">
            <AiFillDelete />
          </td>
        </tr>
        <tr>
          <td>Discover the latest fashion & trends at shop</td>
          <td className="mobile_view">81,024</td>
          <td>2 days ago</td>
          <td className="mobile_view">3,764 opened</td>
          <td className="mobile_view">171 clicked</td>
          <td className="mobile_view">
            <AiFillDelete />
          </td>
        </tr>
        <tr>
          <td>Discover the latest fashion & trends at shop</td>
          <td className="mobile_view">81,024</td>
          <td>2 days ago</td>
          <td className="mobile_view">3,764 opened</td>
          <td className="mobile_view">171 clicked</td>
          <td className="mobile_view">
            <AiFillDelete />
          </td>
        </tr>
        <tr>
          <td>Discover the latest fashion & trends at shop</td>
          <td className="mobile_view">81,024</td>
          <td>2 days ago</td>
          <td className="mobile_view">3,764 opened</td>
          <td className="mobile_view">171 clicked</td>
          <td className="mobile_view">
            <AiFillDelete />
          </td>
        </tr>
        <tr>
          <td>Discover the latest fashion & trends at shop</td>
          <td className="mobile_view">81,024</td>
          <td>2 days ago</td>
          <td className="mobile_view">3,764 opened</td>
          <td className="mobile_view">171 clicked</td>
          <td className="mobile_view">
            <AiFillDelete />
          </td>
        </tr>
        <tr>
          <td>Discover the latest fashion & trends at shop</td>
          <td className="mobile_view">81,024</td>
          <td>2 days ago</td>
          <td className="mobile_view">3,764 opened</td>
          <td className="mobile_view">171 clicked</td>
          <td className="mobile_view">
            <AiFillDelete />
          </td>
        </tr>
        <tr>
          <td>Discover the latest fashion & trends at shop</td>
          <td className="mobile_view">81,024</td>
          <td>2 days ago</td>
          <td className="mobile_view">3,764 opened</td>
          <td className="mobile_view">171 clicked</td>
          <td className="mobile_view">
            <AiFillDelete />
          </td>
        </tr>
        <tr>
          <td>Discover the latest fashion & trends at shop</td>
          <td className="mobile_view">81,024</td>
          <td>2 days ago</td>
          <td className="mobile_view">3,764 opened</td>
          <td className="mobile_view">171 clicked</td>
          <td className="mobile_view">
            <AiFillDelete />
          </td>
        </tr>
      </table>

      <div className="button_box">
        <button className="button">
          <AiOutlineArrowLeft size={20} />
        </button>
        <button className="button">
          <AiOutlineArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
