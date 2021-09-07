import React from 'react';
import './Offers.css';

const Offers = () => {
    return (
        <div class="card">
            <div class="card-header card-header-warning">
                <h4 class="card-title" >Список задач</h4>
            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover">
                    <thead class="text-warning">
                    <th>#</th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Приоритет</th>
                    <th>Дата</th>
                    <th>Статус</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div class=" form-check">
                                <label class=" form-check-label">
                                    <input class=" form-check-input" type=" checkbox" value=""></input>
                                    <span class="form-check-sign">
                    <span class="check"></span>
                    </span>
                                </label>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
};

export default Offers;
