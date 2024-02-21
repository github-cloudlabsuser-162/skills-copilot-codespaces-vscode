# Login to your Azure account
Connect-AzAccount

# Select your subscription
$subscriptionId = 'your-subscription-id'
Select-AzSubscription -SubscriptionId $subscriptionId

# Define parameters
$resourceGroupName = 'myResourceGroup'
$location = 'westus'
$storageAccountName = 'mystorageaccount'

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS