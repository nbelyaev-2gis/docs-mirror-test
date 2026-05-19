workspace {
    
    !identifiers hierarchical
    
    model {
    
        user = person "User" "End user of GIS solutions in the installed system"
        admin = person "Engineer" "DevOps engineer responsible for the system installation and operation"
        operator = person "Operator" "Manages user access to the system"
        public = element "Public update servers" "" "Publicly hosted servers" "storage,external"
    
    
        softwareSystem = softwareSystem "On-Premise installation"{
        
            k8s = group "Kubernetes cluster" {
    
                onprem = container "On-Premise" "Set of GIS services deployed in a private network"
            }
            
            storage = container "Data storage systems" "Storage of services data, installation artifacts, and images" "" "storage"
            
            
            onprem -> storage "Stores data and images using"
            
        }
        
        user -> softwareSystem.onprem "Uses GIS products of"
        admin -> softwareSystem.onprem "Configures environment and deploys services of"
        operator -> softwareSystem.onprem "Issues API keys and licenses for users of"
        softwareSystem.onprem -> public "Updates data and installation artifacts using"
        
    
    }
    
    views {
    
        container softwareSystem "All" {
            include *
            autolayout
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
                color white
            }
            element "Person" {
                shape person
            }
        }
    }

}