


public boolean can_see_visibility_calc {
  return visibility = true;
}

public boolean can_not_see_visibility_calc {
  return visibility = false;
}

public string dollar_value_calc {
  return '$0.00';
}

public int rent_calc {
  int rent = 800;
  int parking = 50;
  int utilities = 120;
  return rent + parking +utilities;
}
