import React from 'react';
import d from './DialogItem.module.css'

const DialogItem = (props) => {
    return(
        <div className={d.dialogs}>
            <div className={d.dialogsitems}>
                <div className={d.dialog}>
                    Oleg
                </div>
                <div className={d.dialog}>
                    Andrey
                </div>
                <div className={d.dialog}>
                    Sasha
                </div>
                <div className={d.dialog}>
                    Sveta
                </div>
              <div className={d.dialog}>
                    Victor
                </div>

            </div>
            <div className={d.messages}>
                <div className="{d.message}">Hi</div>
                <div className="{d.message}">Hi is your</div>
                <div className="{d.message}">Hi hi</div>

            </div>
        </div>
    )};

export default DialogItem;