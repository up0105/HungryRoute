<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $casts = [
        'toppings' => 'array',
    ];

    protected $appends = ['chef'];

    protected $hidden = ['user'];

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getChefAttribute()
    {
        return $this->user->name;
    }
    
    // Pirce in currency format
    public function getPriceAttribute($value)
    {
        return $this->attributes['price']. ' ₹';
    }
}
