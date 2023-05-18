const prisma = require("./index");

async function main(req, res) {
  const emp = [
    {
      name: "Ethan",
      email: "ethan@gmail.com",
      phone: 7894561230,
      country: "India",
    },
    {
      name: "Emily",
      email: "emily@gmail.com",
      phone: 9876543210,
      country: "India",
    },
    {
      name: "Daniel",
      email: "daniel123@gmail.com",
      phone: 9012345678,
      country: "India",
    },
    {
      name: "Sophie",
      email: "sophie@gmail.com",
      phone: 8901234567,
      country: "India",
    },
    {
      name: "Jacob",
      email: "jacob@gmail.com",
      phone: 9012873465,
      country: "India",
    },
    {
      name: "Chloe",
      email: "chloe@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Alexander",
      email: "alexander123@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Grace",
      email: "grace123@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Benjamin",
      email: "benjamin123@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Lily",
      email: "lily@gmail.com",
      phone: 7896540231,
      country: "India",
    },
    {
      name: "Christopher",
      email: "christopher@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Zoe",
      email: "zoe@gmail.com",
      phone: 8901234576,
      country: "India",
    },
    {
      name: "Carter",
      email: "carter@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Mila",
      email: "mila@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Andrew",
      email: "andrew@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Hannah",
      email: "hannah@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "William",
      email: "william123@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Elijah",
      email: "elijah@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Nora",
      email: "nora@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Matthew",
      email: "matthew123@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Victoria",
      email: "victoria@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "David",
      email: "david123@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Samantha",
      email: "samantha@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Joseph",
      email: "joseph@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Oliver",
      email: "oliver@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Ava",
      email: "ava33@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Samuel",
      email: "samuel33@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Abigail",
      email: "abigail@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "James",
      email: "james123@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Penelope",
      email: "penelope@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Daniel",
      email: "daniel@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Grace",
      email: "grace@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Michael",
      email: "michael123@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Scarlett",
      email: "scarlett@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Sebastian",
      email: "sebastian5@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Madison",
      email: "madison66@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Henry",
      email: "henry85@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Natalie",
      email: "natalie45@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Jack",
      email: "jack4545@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Ella",
      email: "ella55555@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Luke",
      email: "luke545@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Avery",
      email: "avery123456@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "David",
      email: "david456789@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Lily",
      email: "lily123523@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Christopher",
      email: "christopher12523@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Mia",
      email: "mia454@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "John",
      email: "john1235456@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Aria",
      email: "aria15@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Matthew",
      email: "matthew5454@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Sophia",
      email: "sophia11544523@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Joseph",
      email: "joseph12153@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Evelyn",
      email: "evelyn5454@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Owen",
      email: "owen444@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Sofia",
      email: "sofia4555@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Samuel",
      email: "samuel15523@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Victoria",
      email: "victoria155523@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Daniel",
      email: "daniel411156@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Eleanor",
      email: "eleanor444@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "William",
      email: "william1114@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Chloe",
      email: "chloe12113@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "James",
      email: "james8265@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Elizabeth",
      email: "elizabeth5562@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Ethan",
      email: "ethan1234545@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Emma",
      email: "emma12@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Samuel",
      email: "samuel2121456@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Ava",
      email: "ava11223@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Oliver",
      email: "oliver212123@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Mila",
      email: "mila1213@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Joseph",
      email: "joseph45116@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Evelyn",
      email: "evelyn1123@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Matthew",
      email: "matthew112223@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Sophia",
      email: "sophia21251@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Lucas",
      email: "lucas1@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Eleanor",
      email: "eleano1r123@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Alexander",
      email: "alexander2121@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Avery",
      email: "avery144@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Daniel",
      email: "daniel784549@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Harper",
      email: "harper4545@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Noah",
      email: "noah111@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Aria",
      email: "aria126546463@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Michael",
      email: "michael545@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Charlotte",
      email: "charlotte6566@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Benjamin",
      email: "benjamin445@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Elena",
      email: "elena5454@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Daniel",
      email: "daniel7890@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Sophie",
      email: "sophie122123@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Alexander",
      email: "alexander1123@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Emma",
      email: "emma1256653@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Matthew",
      email: "matthew454@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Chloe",
      email: "chloe2@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "James",
      email: "james12355@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Olivia",
      email: "olivia221@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Liam",
      email: "liam5122@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Eva",
      email: "eva5454@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Samuel",
      email: "samuel4455@gmail.com",
      phone: 9087612345,
      country: "India",
    },
    {
      name: "Ava",
      email: "ava455464@gmail.com",
      phone: 8901234765,
      country: "India",
    },
    {
      name: "Henry",
      email: "henry44@gmail.com",
      phone: 9012873456,
      country: "India",
    },
    {
      name: "Isabella",
      email: "isabella8552@gmail.com",
      phone: 7896540123,
      country: "India",
    },
    {
      name: "Jacob",
      email: "jacob852@gmail.com",
      phone: 9087612345,
      country: "India",
    },
  ];

  const createManyPosts = emp.map((data) =>
    prisma.employee.create({
      data: data,
    })
  );

  Promise.all(createManyPosts);
  console.log("successfully Seeded");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
