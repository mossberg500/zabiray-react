import React from 'react';
import './Offers.css';
import Offer from "./Offer/Offer";

const Offers = (props) => {
    let newOffers = props.offersStat.offers.map(off => <Offer id={off.id}
                                                              name={off.name}
                                                              categoryId={off.categoryId}
                                                              supplierId={off.supplierId}
                                                              date={off.date} /> );


    return (
        <div class="card">
            <div class="card-header card-header-warning">
                <h4 class="card-title">Список задач</h4>
            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover">
                    <thead class="text-warning">
                    <th>#</th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Поставщик</th>
                    <th>Дата</th>
                    <th>Статус</th>
                    </thead>
                    <tbody>
                    <tr>
                        { newOffers }
                        {/*    <Offer id='1' name='Одеяло' categoryId='Электроодеяло' supplierId='Забирай' date='09-08-2021' />
                        <Offer id='2' name='Яблоко' categoryId='Продукты' supplierId='Забирай' date='11-09-2021' />*/}
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
};

export default Offers;
