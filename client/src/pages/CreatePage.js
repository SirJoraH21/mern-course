import React, {useState} from 'react'

export const CreatePage = () => {
    return (
        <div className='row'>
            <div className='col s8 offset-s2' style={{paddingTop: '2rem'}}>
            <div className="input-field">
                <input
                  placeholder="Вставте посилання"
                  id="link"
                  type="text"
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
        </div>
    )
}