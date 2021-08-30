select a.name, a.birthdate, b.name
  from 
    user as a, customer as b, user_customer as ab 
where 
  a.id=ab.user_id 
  and b.id = ab.customer_id
  and a.birthdate > 18
  and a.status = 1
order by 3
