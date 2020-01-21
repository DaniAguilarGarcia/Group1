# User Schema
```json
{
    "_id": "ObjectId",
    "username": "String",
    "name": "String",
    "nickname": "String",
    "email": "String",
    "password": "String",
    "shipping_addresses": ["Address"],
    "payment_methods": ["PaymentMethod"],
    "created_at": "DateTime",
    "updated_at": "DateTime"
}
```