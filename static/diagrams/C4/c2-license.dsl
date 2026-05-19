workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
        
        dgcli = container "DGCLI" "Utility for getting artifacts for On-Premise deployment"
        storage = container "File/Object storage" "Storage for data" "S3 compatible storage" "storage"
        #registry = container "Docker Registry" "Docker registry to store images of services" "Docker" "storage"
            
        license = container "License service" "Provides access to On-Premise services" "" "focus"
        other = container "Other On-Premise services"
        
        license -> storage "Stores files for license request at"
        license -> storage "Downloads resulting license from"
        dgcli -> storage "Reads license request files from"
        dgcli -> storage "Stores resulting license at"
        license -> other "Uses license to grant user access to"
            
        }
        
        public = softwareSystem "Internet" {
            
            servers = container "Public update servers" "Public servers to generate licenses" "" "external"
        }
        
        softwareSystem.dgcli -> public.servers "Requests and gets license from"

    
    }
    
    views {
    
        container softwareSystem "All" {
            include element.type==container
            autolayout lr 400 500
        }
        
        
        
        styles {
            element "Element" {
                background #1168bd
                color #ffffff
                opacity 60
            }
            element "storage" {
                shape cylinder
                background #dddddd
                color #000000
            }
            element "external" {
                background green
            }
            element "focus" {
                opacity 100
            }
        }
    }

}