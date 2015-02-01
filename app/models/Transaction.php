<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/27/15
 * Time: 6:51 AM
 */

class Transaction extends Eloquent{

    public function customer()
    {
        return $this->belongsTo('Customer');
    }
}
