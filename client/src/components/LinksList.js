import React from 'react'
import {Link} from 'react-router-dom'
export const LinksList = ({ links }) => {
if (!links.length) {
    return <p className="center">Посилання поки що відсутні</p>
}

    return (
        <table>
        <thead>
          <tr>
              <th>№</th>
              <th>Оригінальна</th>
              <th>Скорочена</th>
              <th>Перейти</th>
          </tr>
        </thead>

        <tbody>
            { links.map((link, index) => {
                return (
            <tr key={link._id}>
            <td>{index + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td><Link to={`/detail/${link._id}`}>Перейти</Link></td>
            </tr>
                )
            }) }
        </tbody>
      </table>
    )
}