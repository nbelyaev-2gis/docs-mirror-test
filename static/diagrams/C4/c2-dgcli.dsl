workspace {

    !identifiers hierarchical

    model {

        softwareSystem = softwareSystem "On-Premise"{

        dgcli = container "DGCLI" "Utility for getting artifacts for On-Premise deployment"
        storage = container "File/Object storage" "Storage for data" "S3 compatible storage" "storage"
        registry = container "Image storage" "Storage for images of services" "Docker" "storage"

        dgcli -> storage "Loads installation artifacts to"
        dgcli -> registry "Loads Docker images to"


        }

        public = softwareSystem "Internet" {

            servers = container "Public update servers" "Public servers to get and update installation artifacts" "" "external"
        }

        softwareSystem.dgcli -> public.servers "Gets data from"


    }

    views {

        container softwareSystem "All" {
            include element.type==container
            autolayout tb
        }



        styles {
            element "Element" {
                background #1168bd
                color #ffffff
            }
            element "storage" {
                shape cylinder
                background #dddddd
                color #000000
            }
            element "external" {
                background green
            }
        }
    }

}
