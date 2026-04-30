from allocator import allocate
from loader import load_config, load_slots, load_volunteers


def main():
    config = load_config()
    volunteers = load_volunteers(config["data"]["volunteer_file"])
    slots = load_slots(config["data"]["slot_file"]) #IDENTIFY
    min_experience = config["rules"]["min_experience"]

    assignments = allocate(volunteers, slots, min_experience) 

    print("\nVolunteer Assignments")
    print("---------------------")
    for line in assignments:
        print(line)


main()
