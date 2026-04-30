def allocate(volunteers, slots, min_experience):
    assigned = []

    for volunteer in volunteers:
        zone = volunteer.get("preferred_zone") #FIXED
        experience = volunteer.get("experience", 0) #FIXED

        if zone is None or zone not in slots: #FIXED
            continue

        if experience < min_experience:
            continue

        if slots[zone] > 0:
            assigned.append(f'{volunteer["name"]} -> {zone}')
            slots[zone] -= 1

    return assigned
